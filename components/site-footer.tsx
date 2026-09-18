import { ColorTicks } from "@/components/brand-mark";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.35em] text-ink">
            TIIWA
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-ink-dim">
            A private baby-care log for the hours between sleeps. Built by{" "}
            <a
              href="https://www.danoitech.com/"
              className="underline decoration-ink/20 underline-offset-4 hover:text-ink"
            >
              DanoiTech
            </a>
            .
          </p>
          <ColorTicks className="mt-4" />
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink-dim sm:items-end">
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <a href="mailto:hello@danoitech.com" className="hover:text-ink">
            hello@danoitech.com
          </a>
          <p className="pt-2 text-xs">
            © {new Date().getFullYear()} DanoiTech LTD. Essex, UK · Abuja, NG
          </p>
        </div>
      </div>
    </footer>
  );
}
