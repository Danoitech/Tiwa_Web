import { Moon } from "lucide-react";

export function BrandMark({ size = 96 }: { size?: number }) {
  const blob = size * 0.34;

  return (
    <div className="breathe relative" style={{ width: size, height: size }}>
      <span
        className="absolute rounded-full bg-amber-deep"
        style={{
          width: blob,
          height: blob,
          top: size * 0.06,
          left: size * 0.33,
        }}
      />
      <span
        className="absolute rounded-full bg-mint-deep"
        style={{
          width: blob,
          height: blob,
          top: size * 0.38,
          left: size * 0.04,
        }}
      />
      <span
        className="absolute rounded-full bg-peach-deep"
        style={{
          width: blob,
          height: blob,
          top: size * 0.38,
          left: size * 0.62,
        }}
      />
      <Moon
        className="absolute inset-0 m-auto text-ink"
        size={size * 0.28}
        strokeWidth={1.8}
      />
    </div>
  );
}

export function BrandLockup({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size={compact ? 32 : 40} />
      <span className="flex flex-col">
        <span className="text-[15px] font-semibold tracking-[0.35em] text-ink">
          TIIWA
        </span>
        {!compact ? (
          <span className="text-[11px] tracking-wide text-ink-dim">
            for the hours between sleeps
          </span>
        ) : null}
      </span>
    </span>
  );
}

export function ColorTicks({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-2 ${className}`}>
      <span className="size-1.5 rounded-full bg-amber" />
      <span className="size-1.5 rounded-full bg-mint" />
      <span className="size-1.5 rounded-full bg-peach" />
    </span>
  );
}
