"use client";

import { joinWaitlist, type WaitlistState } from "@/app/actions";
import { useActionState } from "react";

const initial: WaitlistState = { ok: false, message: "" };

export function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initial);

  if (state.ok) {
    return (
      <p className="rounded-2xl bg-mint-deep px-5 py-4 text-sm leading-6 text-ink">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="flex w-full flex-col gap-3">
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="waitlist-email">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="h-12 flex-1 rounded-2xl border border-ink/10 bg-card px-4 text-sm text-ink outline-none ring-mint/40 placeholder:text-ink-dim focus:ring-2"
        />
        <div aria-hidden className="hidden">
          <input name="company" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="h-12 rounded-2xl bg-amber px-6 text-sm font-medium text-on-accent transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? "Saving…" : "Join the waitlist"}
        </button>
      </div>
      {state.message ? (
        <p className="text-sm text-danger" role="alert">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
