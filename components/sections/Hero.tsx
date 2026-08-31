"use client";

import { Button } from "@/components/ui/Button";
import { BrazilMap } from "@/components/hero/BrazilMap";
import { useContact } from "@/components/providers/ContactProvider";
import { easeOutExpo } from "@/lib/animations";
import { motion } from "framer-motion";

export function Hero() {
  const { open } = useContact();

  return (
    <section
      id="inicio"
      className="grain relative overflow-hidden bg-luxus-black text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-[520px] w-[520px] rounded-full bg-luxus-accent/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-[90px]"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1280px] items-center gap-8 px-6 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-20 lg:pt-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo }}
            className="headline text-[3.15rem] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Telefonia.
            <br />
            Do jeito que
            <br />
            deveria ser.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
            className="mt-7 max-w-md text-lg leading-relaxed text-white/60"
          >
            Planos inteligentes, atendimento de verdade e tecnologia para
            manter você sempre conectado.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: easeOutExpo }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#planos" variant="inverse" size="lg">
              Conheça nossos planos
            </Button>
            <Button
              type="button"
              variant="ghost-light"
              size="lg"
              onClick={() => open("especialista")}
            >
              Fale com um especialista
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: easeOutExpo }}
          className="pointer-events-none mx-auto w-full max-w-[480px] lg:max-w-none"
        >
          <BrazilMap />
        </motion.div>
      </div>
    </section>
  );
}
