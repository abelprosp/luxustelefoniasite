"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, whatsappPrefill } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { easeOutExpo } from "@/lib/animations";

type Intent = keyof typeof whatsappPrefill;

export type ContactExtras = {
  planGb?: number;
  planLabel?: string;
};

type ContactContextValue = {
  open: (intent?: Intent, extras?: ContactExtras) => void;
  close: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return ctx;
}

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [intent, setIntent] = useState<Intent>("default");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("planos");
  const [sending, setSending] = useState(false);
  const [extras, setExtras] = useState<ContactExtras>({});

  const open = useCallback((next: Intent = "default", nextExtras?: ContactExtras) => {
    setIntent(next);
    setExtras(nextExtras ?? {});
    if (nextExtras?.planLabel) {
      setInterest("planos");
    }
    setVisible(true);
  }, []);

  const close = useCallback(() => setVisible(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    const payload = {
      name,
      phone,
      interest,
      intent,
      planGb: extras.planGb ?? null,
      planLabel: extras.planLabel ?? null,
      source: "landing",
    };

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* Integração CRM futura — o WhatsApp segue como canal principal. */
    }

    const message = [
      whatsappPrefill[intent] ?? whatsappPrefill.default,
      extras.planLabel
        ? `Tenho interesse no plano de ${extras.planLabel}.`
        : "",
      name ? `Meu nome é ${name}.` : "",
      phone ? `Telefone: ${phone}.` : "",
      `Interesse: ${interest}.`,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSending(false);
    setVisible(false);
  }

  return (
    <ContactContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {visible ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Fechar"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-title"
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
              className="relative z-10 w-full max-w-md rounded-t-3xl bg-luxus-paper p-7 shadow-2xl sm:rounded-3xl sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-luxus-accent">
                Fale com a Luxus
              </p>
              <h2
                id="contact-title"
                className="mt-3 text-2xl font-medium tracking-tight text-luxus-black"
              >
                Como podemos ajudar?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-luxus-muted">
                Envie seus dados. Vamos continuar a conversa no WhatsApp, com
                quem realmente resolve.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs text-luxus-muted">
                    Nome
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-luxus-line bg-white px-4 text-sm outline-none transition focus:border-luxus-accent"
                    placeholder="Seu nome"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-luxus-muted">
                    WhatsApp
                  </span>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-luxus-line bg-white px-4 text-sm outline-none transition focus:border-luxus-accent"
                    placeholder="(51) 99999-0000"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-luxus-muted">
                    Interesse
                  </span>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="h-12 w-full appearance-none rounded-2xl border border-luxus-line bg-white px-4 text-sm outline-none transition focus:border-luxus-accent"
                  >
                    <option value="planos">Planos</option>
                    <option value="empresas">Soluções para empresas</option>
                    <option value="suporte">Suporte</option>
                    <option value="internet">Internet e conectividade</option>
                  </select>
                </label>
                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    className="flex-1"
                    onClick={close}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" className="flex-1" disabled={sending}>
                    {sending ? "Abrindo…" : "Quero contratar"}
                  </Button>
                </div>
              </form>
              <p className="mt-4 text-center text-[11px] text-luxus-muted">
                {site.contact.email} · {site.contact.phoneDisplay}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ContactContext.Provider>
  );
}
