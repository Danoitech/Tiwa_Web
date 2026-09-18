import { BrandMark } from "@/components/brand-mark";
import { DashboardPhone, TimerPhone } from "@/components/phone-mock";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaitlistForm } from "@/components/waitlist-form";
import {
  Clock3,
  Droplet,
  Fingerprint,
  Lock,
  Milk,
  Moon,
  Shield,
  Smartphone,
} from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tiiwa",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  description:
    "A private baby-care log for feeds, sleep, and nappies. Data stays on the phone.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  publisher: {
    "@type": "Organization",
    name: "DanoiTech LTD",
    url: "https://www.danoitech.com/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <LogTypes />
        <QuietHours />
        <PrivacyBand />
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-24 top-10 size-72 rounded-full bg-amber-deep/70 blur-3xl" />
        <div className="absolute right-0 top-40 size-80 rounded-full bg-mint-deep/80 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-64 rounded-full bg-peach-deep/50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-20">
        <div className="rise relative">
          <BrandMark size={88} />
          <p className="mt-8 font-display text-lg italic text-ink-dim">
            for the hours between sleeps
          </p>
          <h1 className="mt-3 max-w-xl font-display text-4xl font-medium leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
            Everything about today, in one glance.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-ink-dim">
            Feeds, sleep, and nappies — logged in one tap, even at 3am. Tiiwa
            keeps the log on this phone, locked behind your PIN.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Chip>On this phone</Chip>
            <Chip>PIN + Face ID</Chip>
            <Chip>No cloud sync</Chip>
          </div>
          <a
            href="#waitlist"
            className="mt-8 inline-flex h-12 items-center rounded-2xl bg-mint px-6 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Join the waitlist
          </a>
        </div>

        <div className="relative mx-auto flex justify-center lg:justify-end">
          <DashboardPhone />
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-card-soft px-3 py-1.5 text-xs text-ink">
      {children}
    </span>
  );
}

function LogTypes() {
  return (
    <section id="log" className="scroll-mt-20 border-t border-ink/5">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-medium tracking-[0.2em] text-ink-dim uppercase">
          The log
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-ink sm:text-4xl">
          Three things. That&apos;s the night.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-6 text-ink-dim">
          Tiiwa is not a social feed and not a clinic. It is a quiet record of
          what already happened, so you can see today without opening a
          spreadsheet.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <FeatureCard
            glow="bg-amber-deep"
            icon={<Milk className="text-amber" size={22} />}
            title="Feed"
            body="Breast or bottle. Start a timer, or log minutes after. If you only remember “sometime this morning,” that still counts."
          />
          <FeatureCard
            glow="bg-mint-deep"
            icon={<Moon className="text-mint" size={22} />}
            title="Sleep"
            body="One tap to start, one tap to stop. Today’s rhythm shows where the naps actually landed — not a guess from memory."
          />
          <FeatureCard
            glow="bg-peach-deep"
            icon={<Droplet className="text-peach" size={22} />}
            title="Nappy"
            body="Wet, dirty, or both. Colour if you need it. Log one, or a few at once when you’re catching up after a stretch."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  glow,
  icon,
  title,
  body,
}: {
  glow: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-[28px] bg-card p-6 shadow-[0_16px_40px_-28px_rgba(74,78,81,0.45)]">
      <div className={`mb-5 grid size-14 place-items-center rounded-[20px] ${glow}`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-dim">{body}</p>
    </article>
  );
}

function QuietHours() {
  const items = [
    {
      icon: Clock3,
      title: "Timers that just work",
      body: "Start a feed or sleep with one tap. Tiiwa keeps time so you don't have to do the maths half-asleep.",
    },
    {
      icon: Moon,
      title: "Today’s rhythm",
      body: "Sleep depth across the day, with feeds and nappies marked where they happened. One glance, then back to bed.",
    },
    {
      icon: Smartphone,
      title: "A week, not a lecture",
      body: "Insights shows the last seven days as counts and a timeline. Numbers are a record, not a diagnosis.",
    },
  ];

  return (
    <section className="border-t border-ink/5 bg-card-soft/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-ink-dim uppercase">
            Built for 3am
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-ink sm:text-4xl">
            Large targets. Short paths. No account to open first.
          </h2>
          <div className="mt-12 grid gap-8">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-card">
                  <item.icon size={18} className="text-mint" />
                </div>
                <div>
                  <h3 className="font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-dim">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden justify-self-center lg:block">
          <TimerPhone className="rotate-[-4deg]" />
        </div>
      </div>
    </section>
  );
}

function PrivacyBand() {
  return (
    <section id="privacy" className="scroll-mt-20 border-t border-ink/5">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-ink-dim uppercase">
            Stays here
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
            Logs stay on this phone.
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink-dim">
            Tiiwa does not collect address, location, photos, or advertising
            IDs. Cloud sync is not enabled. Unlock with a PIN, Face ID, or
            fingerprint. Export a CSV when you want a copy. That is the whole
            privacy model.
          </p>
          <a
            href="/privacy"
            className="mt-6 inline-flex text-sm font-medium text-mint hover:underline"
          >
            Read the privacy note
          </a>
        </div>
        <ul className="grid gap-3">
          <PrivacyRow
            icon={<Smartphone size={16} />}
            title="On-device SQLite"
            body="The care log lives in a local database on the phone you already hold."
          />
          <PrivacyRow
            icon={<Lock size={16} />}
            title="PIN on every open"
            body="Daily unlock is always local. Optional recovery email if you forget it."
          />
          <PrivacyRow
            icon={<Fingerprint size={16} />}
            title="Face ID or fingerprint"
            body="Use the sensor on the phone. Biometrics never leave the device."
          />
          <PrivacyRow
            icon={<Shield size={16} />}
            title="CSV you can take with you"
            body="Export the log. No account wall, no vendor lock-in for the record itself."
          />
        </ul>
      </div>
    </section>
  );
}

function PrivacyRow({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-4 rounded-[22px] bg-card p-4">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-card-soft text-ink-dim">
        {icon}
      </span>
      <span>
        <p className="text-sm font-medium text-ink">{title}</p>
        <p className="mt-1 text-sm leading-6 text-ink-dim">{body}</p>
      </span>
    </li>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="scroll-mt-20 border-t border-ink/5">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-on-accent px-6 py-14 text-card sm:px-12">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 size-48 rounded-full bg-mint/30 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-16 left-10 size-56 rounded-full bg-amber/20 blur-2xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-card/60 uppercase">
                Early access
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
                Built for Mom's. Opening to families next.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-card/70">
                Leave an email if you want Tiiwa when it leaves this household.
                No newsletter filler — we will write when there is something to
                hold.
              </p>
            </div>
            <div className="rounded-[24px] bg-canvas p-5 text-ink">
              <WaitlistForm />
              <p className="mt-3 text-xs leading-5 text-ink-dim">
                We only use this to tell you Tiiwa is ready. No ads, no sold
                lists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
