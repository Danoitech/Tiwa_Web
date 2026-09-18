import { Droplet, Milk, Moon } from "lucide-react";
import type { ReactNode } from "react";

function PhoneShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[270px] shrink-0 rounded-[2.5rem] bg-on-accent p-[10px] shadow-[0_30px_80px_-24px_rgba(46,42,39,0.45)] ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-10 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-on-accent" />
      <div className="overflow-hidden rounded-[2rem] bg-canvas">
        {children}
      </div>
    </div>
  );
}

function RhythmChart() {
  return (
    <div className="rounded-2xl bg-card p-3 shadow-[0_8px_24px_-16px_rgba(74,78,81,0.35)]">
      <p className="mb-2 text-[11px] font-medium text-ink">Today&apos;s rhythm</p>
      <svg viewBox="0 0 240 72" className="h-[72px] w-full" aria-hidden>
        <defs>
          <linearGradient id="rhythmFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E9C89" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2E9C89" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path
          d="M0 50 C 18 48, 28 46, 40 44 C 52 42, 58 20, 70 18 C 86 16, 94 22, 108 40 C 122 56, 130 50, 150 48 C 170 46, 178 24, 196 22 C 210 20, 224 38, 240 46 L 240 72 L 0 72 Z"
          fill="url(#rhythmFill)"
          stroke="#2E9C89"
          strokeWidth="2"
        />
      </svg>
      <div className="relative mt-1 h-2">
        <span className="absolute top-0 h-1.5 w-1.5 rounded-full bg-amber" style={{ left: "18%" }} />
        <span className="absolute top-0 h-1.5 w-1.5 rounded-full bg-amber" style={{ left: "38%" }} />
        <span className="absolute top-0 h-1.5 w-1.5 rounded-full bg-peach" style={{ left: "42%" }} />
        <span className="absolute top-0 h-1.5 w-1.5 rounded-full bg-amber" style={{ left: "58%" }} />
        <span className="absolute top-0 h-1.5 w-1.5 rounded-full bg-peach" style={{ left: "72%" }} />
        <span className="absolute top-0 h-1.5 w-1.5 rounded-full bg-amber" style={{ left: "86%" }} />
      </div>
      <div className="mt-1 flex justify-between text-[9px] text-ink-dim">
        <span>12am</span>
        <span>6am</span>
        <span>12pm</span>
        <span>6pm</span>
        <span>12am</span>
      </div>
    </div>
  );
}

export function DashboardPhone({ className = "" }: { className?: string }) {
  return (
    <PhoneShell className={className}>
      <div className="px-3.5 pb-5 pt-8">
        <p className="text-[11px] text-ink-dim">Friday 18 September</p>
        <p className="mt-0.5 text-[17px] font-medium text-ink">
          Watching over Tiwatayo
        </p>

        <div className="mx-auto my-4 grid size-[132px] place-items-center rounded-full bg-amber/20">
          <div className="flex size-[92px] flex-col items-center justify-center rounded-full bg-card text-center shadow-sm">
            <Milk size={18} className="text-amber" />
            <p className="text-[13px] font-medium leading-none text-ink">Awake</p>
            <p className="mt-1 text-[9px] leading-none text-ink-dim">ready when you are</p>
          </div>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-2">
          <Pill icon={<Milk size={18} className="text-amber" />} label="Feed" glow="bg-amber-deep" />
          <Pill icon={<Moon size={18} className="text-mint" />} label="Sleep" glow="bg-mint-deep" />
          <Pill icon={<Droplet size={18} className="text-peach" />} label="Nappy" glow="bg-peach-deep" />
        </div>

        <RhythmChart />

        <div className="mt-3 grid grid-cols-3 text-center">
          <Count value="6" label="feeds today" color="text-amber" />
          <Count value="4h 12m" label="sleep today" color="text-mint" />
          <Count value="5" label="nappies today" color="text-peach" />
        </div>

        <p className="mt-3 rounded-2xl bg-card-soft px-3 py-2.5 text-[11px] leading-4 text-ink-dim">
          Feeds are landing through the day. These numbers are a record, not a
          diagnosis.
        </p>
      </div>
    </PhoneShell>
  );
}

export function TimerPhone({ className = "" }: { className?: string }) {
  return (
    <PhoneShell className={className}>
      <div className="flex min-h-[520px] flex-col items-center justify-center gap-6 px-6 py-10">
        <div className="flex gap-3">
          <span className="grid size-14 place-items-center rounded-[20px] bg-amber-deep">
            <Milk size={22} className="text-amber" />
          </span>
          <span className="mt-4 grid size-14 place-items-center rounded-[20px] bg-mint-deep">
            <Moon size={22} className="text-mint" />
          </span>
          <span className="grid size-14 place-items-center rounded-[20px] bg-peach-deep">
            <Droplet size={22} className="text-peach" />
          </span>
        </div>
        <div className="w-full rounded-[20px] bg-card px-7 py-5 text-center shadow-[0_8px_24px_-12px_rgba(74,78,81,0.35)]">
          <p className="font-medium tabular-nums text-ink">04:12</p>
          <div className="mx-auto mt-3 grid h-9 w-[120px] place-items-center rounded-full bg-danger">
            <span className="text-xs font-medium text-on-accent">Stop</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-[17px] font-semibold leading-6 text-ink">
            Timers that just work.
          </p>
          <p className="mt-2 text-[12px] leading-5 text-ink-dim">
            Start a feed or sleep with one tap. Tiiwa keeps time so you
            don&apos;t have to do the maths half-asleep.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-card-soft" />
          <span className="h-1.5 w-4 rounded-full bg-mint" />
          <span className="h-1.5 w-1.5 rounded-full bg-card-soft" />
        </div>
        <div className="flex h-12 w-full items-center justify-center rounded-2xl bg-mint text-sm font-medium text-on-accent">
          Next
        </div>
      </div>
    </PhoneShell>
  );
}

function Pill({
  icon,
  label,
  glow,
}: {
  icon: ReactNode;
  label: string;
  glow: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-card py-3 shadow-sm">
      <span className={`grid size-10 place-items-center rounded-2xl ${glow}`}>
        {icon}
      </span>
      <span className="text-[11px] text-ink">{label}</span>
    </div>
  );
}

function Count({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div>
      <p className={`text-sm font-medium ${color}`}>{value}</p>
      <p className="text-[9px] text-ink-dim">{label}</p>
    </div>
  );
}
