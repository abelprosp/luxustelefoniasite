"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useContact } from "@/components/providers/ContactProvider";
import { supportMessages } from "@/content/site";
import { easeOutExpo } from "@/lib/animations";
import { motion } from "framer-motion";

export function Support() {
  const { open } = useContact();

  return (
    <section id="suporte" className="bg-luxus-paper py-28 md:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="headline text-4xl text-luxus-black sm:text-5xl md:text-6xl">
              Precisou?
              <br />
              A Luxus resolve.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-luxus-muted">
              Atendimento simples e humano. Sem 0800 eterno. Sem pressionar
              zero. Uma conversa, uma solução.
            </p>
            <div className="mt-10">
              <Button size="lg" onClick={() => open("suporte")}>
                Falar com a Luxus
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[32px] border border-luxus-line bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.2)] sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-luxus-black text-[11px] font-medium tracking-wider text-white">
                  L
                </span>
                <div>
                  <p className="text-sm font-medium">Luxus</p>
                  <p className="text-xs text-luxus-muted">Atendimento · agora</p>
                </div>
              </div>
              <div className="space-y-3">
                {supportMessages.map((m, i) => (
                  <motion.div
                    key={`${m.from}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.45, ease: easeOutExpo }}
                    className={
                      m.from === "user"
                        ? "ml-10 rounded-2xl rounded-br-md bg-luxus-black px-4 py-3 text-[15px] text-white"
                        : "mr-10 rounded-2xl rounded-bl-md bg-luxus-stone px-4 py-3 text-[15px] text-luxus-black"
                    }
                  >
                    {m.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
