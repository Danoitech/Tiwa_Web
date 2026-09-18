import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Tiiwa keeps the baby-care log on your phone. No cloud sync, no advertising IDs.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <p className="text-xs font-medium tracking-[0.2em] text-ink-dim uppercase">
          Privacy
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-ink">
          Logs stay on this phone.
        </h1>
        <p className="mt-6 text-sm leading-7 text-ink-dim">
          Tiiwa is a baby-care log for feeds, sleep, and nappies. It is built
          so the record of a child&apos;s day does not need to live on someone
          else&apos;s server.
        </p>

        <section className="mt-12 space-y-8 text-sm leading-7 text-ink">
          <div>
            <h2 className="font-medium">What Tiiwa stores</h2>
            <p className="mt-2 text-ink-dim">
              The app stores a baby profile (name, optional date of birth) and
              care events you log: feeds, sleep, and nappies, plus optional
              notes. That database is SQLite on the device.
            </p>
          </div>
          <div>
            <h2 className="font-medium">What Tiiwa does not collect</h2>
            <p className="mt-2 text-ink-dim">
              Tiiwa does not collect address, location, photos, or advertising
              IDs. Cloud sync is not enabled. There is no analytics SDK in the
              product we are shipping.
            </p>
          </div>
          <div>
            <h2 className="font-medium">Unlock and recovery</h2>
            <p className="mt-2 text-ink-dim">
              Daily unlock is a PIN you set on the phone. Face ID or fingerprint
              can open the same lock; biometric data never leaves the device.
              You may add a recovery email. If an email code is sent, it is only
              to prove you still have that inbox — it is not used for marketing.
            </p>
          </div>
          <div>
            <h2 className="font-medium">This website</h2>
            <p className="mt-2 text-ink-dim">
              If you join the waitlist, we keep the email you typed so we can
              tell you Tiiwa is ready. We do not sell that list. You can ask us
              to remove it at{" "}
              <a
                className="text-mint underline-offset-4 hover:underline"
                href="mailto:hello@danoitech.com"
              >
                hello@danoitech.com
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-medium">Not medical advice</h2>
            <p className="mt-2 text-ink-dim">
              Counts and charts are a record of what you logged. They are not a
              diagnosis, and Tiiwa is not a substitute for a midwife, health
              visitor, or doctor.
            </p>
          </div>
          <div>
            <h2 className="font-medium">Export</h2>
            <p className="mt-2 text-ink-dim">
              You can export the log as CSV from Settings and take it with you.
            </p>
          </div>
        </section>

        <p className="mt-14 text-xs text-ink-dim">
          DanoiTech LTD · Essex, United Kingdom · Abuja, Nigeria
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
