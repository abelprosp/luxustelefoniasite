"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site, trustStats } from "@/content/site";

export function Trust() {
  return (
    <section id="sobre" className="bg-luxus-stone py-28 md:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-luxus-accent">
            Sobre a Luxus
          </p>
          <h2 className="headline mt-5 text-4xl text-luxus-black sm:text-5xl md:text-[3.25rem]">
            Uma empresa feita para simplificar telecom.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-luxus-muted">
            Nascida no Rio Grande do Sul, a Luxus atua desde {site.foundedYear}{" "}
            para tornar justa e simples a experiência de quem contrata
            telefonia. Independente de operadoras, com equipe especializada e
            presença em todo o país, cuidamos de planos, linhas, faturas e
            suporte — para pessoas e empresas.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-luxus-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="text-3xl font-medium tracking-tight text-luxus-black md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-luxus-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
