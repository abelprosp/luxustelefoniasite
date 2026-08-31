"use client";

import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useContact } from "@/components/providers/ContactProvider";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { easeOutExpo } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const { open } = useContact();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [heroPast, setHeroPast] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = !isHome || heroPast;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setHeroPast(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const overHero = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300",
        scrolled && !menuOpen
          ? "bg-white/75 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="relative z-[60] mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="relative z-10" aria-label="Luxus Telefonia">
          <Logo variant={overHero || menuOpen ? "light" : "dark"} />
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-medium tracking-[-0.01em] transition-colors duration-300",
                overHero
                  ? "text-white/70 hover:text-white"
                  : "text-luxus-graphite hover:text-luxus-black",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {site.clientPortalUrl ? (
            <a
              href={site.clientPortalUrl}
              className={cn(
                "px-3 text-[13px] font-medium transition-colors duration-300",
                overHero
                  ? "text-white/80 hover:text-white"
                  : "text-luxus-graphite hover:text-luxus-black",
              )}
            >
              Entrar
            </a>
          ) : (
            <button
              type="button"
              onClick={() => open("default")}
              className={cn(
                "px-3 text-[13px] font-medium transition-colors duration-300",
                overHero
                  ? "text-white/80 hover:text-white"
                  : "text-luxus-graphite hover:text-luxus-black",
              )}
            >
              Entrar
            </button>
          )}
          <Button
            size="sm"
            variant={overHero ? "inverse" : "primary"}
            onClick={() => open("default")}
          >
            Fale com a Luxus
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "h-px w-full transition-all duration-300",
                menuOpen
                  ? "translate-y-[4px] rotate-45 bg-white"
                  : overHero
                    ? "bg-white"
                    : "bg-luxus-black",
              )}
            />
            <span
              className={cn(
                "h-px w-full transition-all duration-300",
                menuOpen
                  ? "-translate-y-[4px] -rotate-45 bg-white"
                  : overHero
                    ? "bg-white"
                    : "bg-luxus-black",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="fixed inset-0 z-40 flex flex-col bg-luxus-black px-7 pt-28 text-white lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.45, ease: easeOutExpo }}
                  className="py-3 text-4xl font-medium tracking-tight"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto space-y-3 pb-12">
              <Button
                variant="inverse"
                className="w-full"
                onClick={() => {
                  setMenuOpen(false);
                  open("default");
                }}
              >
                Fale com a Luxus
              </Button>
              <Button
                variant="ghost-light"
                href="#planos"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Conheça nossos planos
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
