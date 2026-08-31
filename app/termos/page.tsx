import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso da ${site.name}.`,
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <>
      <Header />
      <main className="bg-luxus-paper pb-24 pt-32">
        <Container className="max-w-3xl">
          <Logo />
          <h1 className="headline mt-10 text-4xl md:text-5xl">Termos de Uso</h1>
          <p className="mt-6 text-sm text-luxus-muted">
            Documento-base para revisão jurídica. Atualize com o texto legal
            definitivo antes da publicação.
          </p>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-luxus-graphite">
            <p>
              Ao utilizar o site da {site.name}, você concorda com estas
              condições. Os conteúdos institucionais, planos e materiais
              apresentados têm caráter informativo e podem ser atualizados
              sem aviso prévio.
            </p>
            <h2 className="pt-4 text-2xl font-medium tracking-tight text-luxus-black">
              Serviços
            </h2>
            <p>
              A Luxus oferece soluções de telefonia, conectividade, gestão de
              linhas, planos e suporte para pessoas e empresas. A contratação
              efetiva depende de análise, disponibilidade e documentos
              específicos de cada oferta.
            </p>
            <h2 className="pt-4 text-2xl font-medium tracking-tight text-luxus-black">
              Preços
            </h2>
            <p>
              Valores de planos são configuráveis e podem ser apresentados
              como “sob consulta” até confirmação comercial. Nada neste site
              constitui proposta irrevogável.
            </p>
            <h2 className="pt-4 text-2xl font-medium tracking-tight text-luxus-black">
              Contato
            </h2>
            <p>
              Dúvidas:{" "}
              <a className="underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
