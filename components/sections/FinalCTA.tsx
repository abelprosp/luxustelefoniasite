"use client";

import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { AppHomeScreen, AppLinesScreen } from "@/components/phone/AppScreen";
import { useContact } from "@/components/providers/ContactProvider";
import { easeOutExpo } from "@/lib/animations";
import { motion } from "framer-motion";

export function FinalCTA() {
  const { open } = useContact();

  return (
    <section className="grain relative overflow-hidden bg-luxus-black py-28 text-white md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-luxus-accent/12 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: easeOutExpo }}
            className="headline text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            Pronto para simplificar sua telefonia?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
            className="mt-6 max-w-md text-lg text-white/55"
          >
            Descubra uma experiência diferente em telefonia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18, ease: easeOutExpo }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button variant="inverse" size="lg" onClick={() => open("default")}>
              Fale com a Luxus
            </Button>
            <Button variant="ghost-light" size="lg" href="#planos">
              Conheça os planos
            </Button>
          </motion.div>
        </div>

        <div className="relative mx-auto hidden h-[420px] w-full max-w-[420px] lg:block">
          <div className="absolute left-0 top-10 w-[210px] opacity-70 [transform:rotate(-16deg)]">
            <PhoneFrame glow={false} dark>
              <AppLinesScreen />
            </PhoneFrame>
          </div>
          <div className="absolute right-0 top-0 z-10 w-[240px] [transform:rotate(10deg)]">
            <PhoneFrame dark>
              <AppHomeScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
