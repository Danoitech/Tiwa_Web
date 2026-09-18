"use server";

import { randomUUID } from "node:crypto";
import { mkdir, open, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

export type WaitlistState = {
  ok: boolean;
  message: string;
};

type WaitlistEntry = { email: string; at: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let persistQueue: Promise<void> = Promise.resolve();

function waitlistPath() {
  if (process.env.VERCEL) {
    return path.join("/tmp", "tiiwa-waitlist.json");
  }
  return path.join(process.cwd(), ".data", "waitlist.json");
}

function enqueuePersist(task: () => Promise<void>) {
  const run = persistQueue.then(task, task);
  persistQueue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function withExclusiveLock(lockPath: string, task: () => Promise<void>) {
  const deadline = Date.now() + 4000;

  while (Date.now() < deadline) {
    try {
      const handle = await open(lockPath, "wx");
      try {
        await task();
      } finally {
        await handle.close();
        await unlink(lockPath).catch(() => undefined);
      }
      return;
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code;
      if (code !== "EEXIST") throw error;
      try {
        const age = Date.now() - (await stat(lockPath)).mtimeMs;
        if (age > 8000) await unlink(lockPath).catch(() => undefined);
      } catch {
        // Lock disappeared between attempts; retry immediately.
      }
      await new Promise((resolve) => setTimeout(resolve, 15 + Math.random() * 25));
    }
  }

  throw new Error("Could not lock the waitlist file");
}

async function readEntries(file: string): Promise<WaitlistEntry[]> {
  try {
    return JSON.parse(await readFile(file, "utf8")) as WaitlistEntry[];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") return [];
    throw error;
  }
}

async function writeEntriesAtomic(file: string, entries: WaitlistEntry[]) {
  const temp = `${file}.${randomUUID()}.tmp`;
  try {
    await writeFile(temp, JSON.stringify(entries, null, 2));
    await rename(temp, file);
  } catch (error) {
    await unlink(temp).catch(() => undefined);
    throw error;
  }
}

async function persistEmail(email: string) {
  const file = waitlistPath();
  await mkdir(path.dirname(file), { recursive: true });

  await enqueuePersist(() =>
    withExclusiveLock(`${file}.lock`, async () => {
      const entries = await readEntries(file);
      if (entries.some((entry) => entry.email === email)) return;
      entries.push({ email, at: new Date().toISOString() });
      await writeEntriesAtomic(file, entries);
    }),
  );

  const webhook = process.env.WAITLIST_WEBHOOK;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "tiiwa-web" }),
    }).catch(() => undefined);
  }
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  if (String(formData.get("company") ?? "")) {
    return {
      ok: true,
      message: "You're on the list. We'll write when Tiiwa is ready for your family.",
    };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!emailPattern.test(email)) {
    return { ok: false, message: "Please enter a valid email." };
  }

  try {
    await persistEmail(email);
  } catch {
    return {
      ok: false,
      message: "Could not save that just now. Email hello@danoitech.com and we'll add you.",
    };
  }

  return {
    ok: true,
    message: "You're on the list. We'll write when Tiiwa is ready for your family.",
  };
}
