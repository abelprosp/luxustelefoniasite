"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { experienceCards } from "@/content/site";

export function Experience() {
  return (
    <section id="telefonia" className="bg-luxus-paper py-28 md:py-36">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="headline text-4xl text-luxus-black sm:text-5xl md:text-6xl">
            Telefonia ficou simples.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-luxus-muted">
            Você não deveria precisar perder tempo para entender seu plano,
            resolver um problema ou encontrar uma solução melhor.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3 md:gap-8">
          {experienceCards.map((card, i) => (
            <Reveal key={card.index} delay={i * 0.12}>
              <article className="group h-full rounded-3xl border border-luxus-line bg-white/60 p-8 transition duration-500 hover:-translate-y-1 hover:border-luxus-black/10 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.18)] md:p-10">
                <p className="text-xs font-medium tracking-[0.22em] text-luxus-accent">
                  {card.index}
                </p>
                <h3 className="mt-8 text-2xl font-medium tracking-tight text-luxus-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-luxus-muted">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
