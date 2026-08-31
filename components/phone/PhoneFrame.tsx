import { cn } from "@/lib/cn";

type PhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  dark?: boolean;
};

export function PhoneFrame({
  children,
  className,
  glow = true,
  dark = false,
}: PhoneFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {glow ? (
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxus-accent/20 blur-[70px]"
        />
      ) : null}

      <div
        className={cn(
          "relative aspect-[9/19.2] w-full overflow-hidden rounded-[2.6rem] p-[9px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55)]",
          dark
            ? "bg-gradient-to-b from-neutral-600 via-neutral-800 to-neutral-950"
            : "bg-gradient-to-b from-neutral-300 via-neutral-500 to-neutral-800",
        )}
      >
        <div className="phone-shine pointer-events-none absolute inset-0 z-20 rounded-[2.6rem]" />
        <div className="relative h-full overflow-hidden rounded-[2.05rem] bg-black">
          <div className="absolute left-1/2 top-[11px] z-30 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-black" />
          <div className="absolute left-1/2 top-[17px] z-30 h-[10px] w-[10px] -translate-x-[18px] rounded-full bg-[#1c1c1e] ring-1 ring-white/10" />
          <div className="h-full overflow-hidden rounded-[2.05rem] bg-[#f4f3ef]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
