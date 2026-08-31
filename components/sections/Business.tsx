"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useContact } from "@/components/providers/ContactProvider";
import { businessBenefits, businessTeam } from "@/content/site";

export function Business() {
  const { open } = useContact();

  return (
    <section id="empresas" className="bg-luxus-stone py-28 md:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-luxus-accent">
                Para empresas
              </p>
              <h2 className="headline mt-5 text-4xl text-luxus-black sm:text-5xl md:text-[3.4rem]">
                Sua empresa conectada.
                <br />
                Sem complicação.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-luxus-muted">
                Centralize linhas, planos, suporte e gestão de telecom com uma
                equipe dedicada. Operação totalmente humanizada — profissionais
                cuidando da sua empresa, do começo ao fim.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {businessBenefits.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <h3 className="text-[17px] font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-luxus-muted">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10">
              <Button size="lg" onClick={() => open("empresas")}>
                Conhecer soluções empresariais
              </Button>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-[32px] bg-luxus-black px-8 py-10 text-white md:px-10 md:py-12">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-luxus-accent">
                Como trabalhamos
              </p>
              <p className="headline mt-5 text-4xl md:text-[2.75rem]">
                Operação 100% humana.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/50">
                Sem aplicativo para a empresa se virar sozinha. Um time
                presente, responsável pela operação.
              </p>
              <ul className="mt-10 space-y-5">
                {businessTeam.map((item) => (
                  <li
                    key={item.index}
                    className="flex items-baseline justify-between gap-4 border-t border-white/10 pt-5"
                  >
                    <span className="text-[15px] font-medium tracking-tight">
                      {item.role}
                    </span>
                    <span className="text-[11px] tracking-[0.18em] text-luxus-accent">
                      {item.index}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
