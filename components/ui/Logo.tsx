import { cn } from "@/lib/cn";
import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  /** Mantido por compatibilidade. O logo oficial já inclui o wordmark. */
  wordmark?: boolean;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Image
      src="/logo-luxus.png"
      alt="Luxus Telefonia"
      width={134}
      height={32}
      priority
      className={cn(
        "h-8 w-auto",
        isLight ? "" : "invert",
        className,
      )}
    />
  );
}
