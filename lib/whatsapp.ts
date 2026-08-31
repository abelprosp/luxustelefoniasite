import { site, whatsappPrefill } from "@/content/site";

export function whatsappUrl(intent: keyof typeof whatsappPrefill | string = "default") {
  const text =
    whatsappPrefill[intent] ??
    (typeof intent === "string" ? intent : whatsappPrefill.default);

  return `https://wa.me/${site.contact.whatsappE164}?text=${encodeURIComponent(text)}`;
}
