"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useContact } from "@/components/providers/ContactProvider";
import { defaultPlanGb, plans, recommendPlan } from "@/content/site";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { easeOutExpo } from "@/lib/animations";

export function Plans() {
  const { open } = useContact();
  const [neededGb, setNeededGb] = useState(defaultPlanGb);
  const recommended = useMemo(() => recommendPlan(neededGb), [neededGb]);

  return (
    <section id="planos" className="bg-luxus-stone py-28 md:py-36">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-luxus-accent">
            Linhas novas
          </p>
          <h2 className="headline mt-5 text-4xl text-luxus-black sm:text-5xl md:text-6xl">
            Escolha o que combina com você.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-luxus-muted">
            Diga quanto de dados você precisa. A Luxus encontra o plano certo.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-16">
          <p className="text-[13px] font-medium text-luxus-graphite">
            Quantos GB você precisa?
          </p>
          <div
            role="radiogroup"
            aria-label="Quantidade de dados"
            className="mt-6 flex flex-wrap gap-3"
          >
            {plans.map((plan) => {
              const selected = neededGb === plan.dataGb;
              return (
                <button
                  key={plan.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setNeededGb(plan.dataGb)}
                  className={cn(
                    "min-h-14 min-w-[5.5rem] rounded-full px-6 text-[15px] font-medium tracking-tight transition duration-300",
                    selected
                      ? "bg-luxus-black text-white"
                      : "bg-white text-luxus-graphite ring-1 ring-luxus-line hover:ring-luxus-black/25",
                  )}
                >
                  {plan.dataLabel}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.14} className="mt-12">
          <AnimatePresence mode="wait">
            <motion.article
              key={recommended.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
              className="rounded-[32px] bg-luxus-black px-8 py-10 text-white md:px-12 md:py-14"
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-luxus-accent">
                O melhor para você
              </p>
              <h3 className="headline mt-5 text-5xl md:text-7xl">
                {recommended.dataLabel}
              </h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/55">
                A franquia que cobre o que você precisa, sem excesso e sem
                ficar sem dados no meio do mês.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="inverse"
                  size="lg"
                  onClick={() =>
                    open("planos", {
                      planGb: recommended.dataGb,
                      planLabel: recommended.dataLabel,
                    })
                  }
                >
                  {recommended.cta}
                </Button>
                <Button
                  variant="ghost-light"
                  size="lg"
                  onClick={() =>
                    open("default", {
                      planGb: recommended.dataGb,
                      planLabel: recommended.dataLabel,
                    })
                  }
                >
                  Fale com a Luxus
                </Button>
              </div>
            </motion.article>
          </AnimatePresence>
        </Reveal>
      </Container>
    </section>
  );
}
