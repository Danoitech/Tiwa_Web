"use client";

import { BrandLockup } from "@/components/brand-mark";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#log", label: "The log" },
  { href: "/privacy", label: "Privacy" },
  { href: "/#waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Tiiwa home" onClick={() => setOpen(false)}>
          <BrandLockup compact />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-dim md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="rounded-2xl bg-mint px-4 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Get Tiiwa
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-xl p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-ink/5 px-5 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-sm text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="mt-2 rounded-2xl bg-mint px-4 py-3 text-center text-sm font-medium text-on-accent"
            onClick={() => setOpen(false)}
          >
            Get Tiiwa
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
