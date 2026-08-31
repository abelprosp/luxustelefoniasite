import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${site.name}.`,
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="bg-luxus-paper pb-24 pt-32">
        <Container className="max-w-3xl">
          <Logo />
          <h1 className="headline mt-10 text-4xl md:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-6 text-sm text-luxus-muted">
            Documento-base para revisão jurídica. Atualize com o texto legal
            definitivo antes da publicação.
          </p>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-luxus-graphite">
            <p>
              A {site.name} (“Luxus”, “nós”) trata dados pessoais para
              atendimento, contratação de planos, suporte e gestão de
              telecomunicações, em conformidade com a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018).
            </p>
            <h2 className="pt-4 text-2xl font-medium tracking-tight text-luxus-black">
              Quais dados coletamos
            </h2>
            <p>
              Nome, telefone, e-mail e informações necessárias para entender
              seu interesse em planos, suporte ou soluções empresariais. Dados
              enviados via formulários, WhatsApp ou canais de atendimento
              podem ser utilizados para dar continuidade ao contato.
            </p>
            <h2 className="pt-4 text-2xl font-medium tracking-tight text-luxus-black">
              Como usamos
            </h2>
            <p>
              Para responder solicitações, apresentar planos, prestar suporte
              e, quando houver consentimento ou hipótese legal, enviar
              comunicações relacionadas aos serviços da Luxus.
            </p>
            <h2 className="pt-4 text-2xl font-medium tracking-tight text-luxus-black">
              Contato do titular
            </h2>
            <p>
              Para exercer direitos previstos na LGPD, escreva para{" "}
              <a className="underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>{" "}
              ou ligue para {site.contact.phoneDisplay}.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
