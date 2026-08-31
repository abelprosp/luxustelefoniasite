"use client";

import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { useContact } from "@/components/providers/ContactProvider";
import { footerLinks, offices, site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  const { open } = useContact();
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="border-t border-luxus-line bg-luxus-paper pb-24 pt-20 md:pb-16"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo className="h-9 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-luxus-muted">
              {site.tagline}
              <br />
              {site.complementary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-5">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-luxus-muted">
                Produtos
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.produtos.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-luxus-graphite transition hover:text-luxus-black"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-luxus-muted">
                Empresa
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.empresa.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-luxus-graphite transition hover:text-luxus-black"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-luxus-muted">
                Legal
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.legal.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-luxus-graphite transition hover:text-luxus-black"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-luxus-muted">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={whatsappUrl("default")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxus-graphite transition hover:text-luxus-black"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${site.contact.phoneE164}`}
                  className="text-luxus-graphite transition hover:text-luxus-black"
                >
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-luxus-graphite transition hover:text-luxus-black"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {site.social.linkedin ? (
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-luxus-muted transition hover:text-luxus-black"
                >
                  LinkedIn
                </a>
              ) : null}
              {site.social.instagram ? (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-luxus-muted transition hover:text-luxus-black"
                >
                  Instagram
                </a>
              ) : null}
              {site.social.facebook ? (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-luxus-muted transition hover:text-luxus-black"
                >
                  Facebook
                </a>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => open("default")}
              className="mt-6 text-sm text-luxus-black underline decoration-luxus-accent/70 underline-offset-4 transition hover:decoration-luxus-accent"
            >
              Fale com a Luxus
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-luxus-line pt-8">
          <p className="text-[11px] uppercase tracking-[0.16em] text-luxus-muted">
            Presença
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-luxus-graphite">
            {offices.map((o) => (
              <span key={o.city}>
                {o.city}/{o.state}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-luxus-line pt-6 text-xs text-luxus-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.legalName}. Todos os direitos
            reservados.
          </p>
          <p>
            {site.headquarters.city}/{site.headquarters.state} · Desde{" "}
            {site.foundedYear}
          </p>
        </div>
      </Container>
    </footer>
  );
}
