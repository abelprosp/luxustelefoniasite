"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Internet() {
  return (
    <section id="internet" className="bg-luxus-paper py-28 md:py-32">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-luxus-accent">
              Internet
            </p>
            <h2 className="headline mt-5 text-4xl text-luxus-black sm:text-5xl md:text-[3.5rem]">
              Conecte.
              <br />
              Sem ruído.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg leading-relaxed text-luxus-muted">
              Internet móvel, 5G e links de dados com a mesma clareza da
              telefonia: o que você usa, o que você precisa, sem complicação.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-luxus-line md:grid-cols-2">
          <Reveal>
            <article className="bg-luxus-paper p-8 md:p-12">
              <h3 className="text-xl font-medium tracking-tight">Para você</h3>
              <p className="mt-3 max-w-sm text-luxus-muted">
                Dados no plano, rede 5G e uma visão simples do que está sendo
                consumido — direto na palma da mão.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="bg-luxus-paper p-8 md:p-12">
              <h3 className="text-xl font-medium tracking-tight">
                Para a empresa
              </h3>
              <p className="mt-3 max-w-sm text-luxus-muted">
                Links de dados e conectividade acompanhados com a operação:
                estável, rastreável e sob gestão.
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
