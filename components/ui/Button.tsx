"use client";

import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "inverse" | "ghost" | "ghost-light" | "gold";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxus-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-luxus-black text-white hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.99]",
  inverse:
    "bg-white text-luxus-black hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.99]",
  ghost:
    "bg-transparent text-luxus-black border border-luxus-black/15 hover:border-luxus-black/40 hover:bg-luxus-black/[0.03]",
  "ghost-light":
    "bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/5",
  gold: "bg-luxus-accent text-white hover:bg-luxus-accent-soft hover:scale-[1.02] active:scale-[0.99]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest;
    return <a href={href} className={classes} {...anchorRest} />;
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
