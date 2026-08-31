/**
 * Conteúdo institucional e comercial da Luxus Telefonia.
 * Tudo o que pode ir para CMS, CRM ou variáveis de ambiente vive aqui.
 */

const FALLBACK_SITE_URL = "https://luxustelefonia.com.br";

function siteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) return `https://${productionHost.replace(/^https?:\/\//, "")}`;
  const vercelHost = process.env.VERCEL_URL?.trim();
  if (vercelHost) return `https://${vercelHost.replace(/^https?:\/\//, "")}`;
  return FALLBACK_SITE_URL;
}

export const site = {
  name: "Luxus Telefonia",
  shortName: "Luxus",
  legalName: "Grupo Luxus",
  tagline: "Telefonia, do jeito que deveria ser.",
  complementary:
    "Planos, linhas, suporte e gestão. Tudo em um só lugar.",
  description:
    "Conheça a Luxus Telefonia. Planos, telefonia, conectividade, suporte e soluções para pessoas e empresas.",
  title: "Luxus Telefonia | Telefonia simples, inteligente e humana",
  url: siteUrl(),
  locale: "pt_BR",
  foundedYear: Number(process.env.NEXT_PUBLIC_FOUNDED_YEAR ?? 2007),
  clientPortalUrl: process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL ?? "",
  contact: {
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(51) 8325-0103",
    phoneE164: process.env.NEXT_PUBLIC_PHONE ?? "555183250103",
    whatsappE164: process.env.NEXT_PUBLIC_WHATSAPP ?? "555183250103",
    email:
      process.env.NEXT_PUBLIC_EMAIL ?? "contato@luxustelefonia.com.br",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/grupo-luxus",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "",
  },
  headquarters: {
    street: "Rua Dom Pedro II, 190",
    neighborhood: "Florestal",
    city: "Lajeado",
    state: "RS",
    postalCode: "95900-000",
    country: "BR",
  },
} as const;

export const nav = [
  { href: "#planos", label: "Planos" },
  { href: "#telefonia", label: "Telefonia" },
  { href: "#internet", label: "Internet" },
  { href: "#suporte", label: "Suporte" },
  { href: "#empresas", label: "Para empresas" },
  { href: "#sobre", label: "Sobre a Luxus" },
] as const;

export const offices = [
  {
    city: "Lajeado",
    state: "RS",
    address: "R. Dom Pedro II, 190 — Florestal",
    phone: "(51) 3710-1301",
  },
  {
    city: "Porto Alegre",
    state: "RS",
    address: "Av. Getúlio Vargas, 1691 — Sala 701",
    phone: "(51) 3094-0894",
  },
  {
    city: "São Paulo",
    state: "SP",
    address: "R. Leopoldo Couto de Magalhães Júnior, 758 — Itaim Bibi",
    phone: "(11) 3090-3439",
  },
  {
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Av. Luiz Carlos Prestes, 180 — Barra da Tijuca",
    phone: "(21) 3400-2999",
  },
  {
    city: "Caxias do Sul",
    state: "RS",
    address: "R. Arturus, 297 — Cruzeiro",
    phone: "(54) 3698-3040",
  },
  {
    city: "Santa Maria",
    state: "RS",
    address: "R. dos Jasmins, 357 — Patronato",
    phone: "(55) 3226-1142",
  },
  {
    city: "Venâncio Aires",
    state: "RS",
    address: "R. Tiradentes, 686 — Sala 34",
    phone: "(51) 99588-1633",
  },
] as const;

export type Plan = {
  id: string;
  dataLabel: string;
  dataGb: number;
  cta: string;
};

export const plans: Plan[] = [
  { id: "3gb", dataLabel: "3 GB", dataGb: 3, cta: "Escolher plano" },
  { id: "12gb", dataLabel: "12 GB", dataGb: 12, cta: "Escolher plano" },
  { id: "20gb", dataLabel: "20 GB", dataGb: 20, cta: "Escolher plano" },
  { id: "50gb", dataLabel: "50 GB", dataGb: 50, cta: "Escolher plano" },
  { id: "80gb", dataLabel: "80 GB", dataGb: 80, cta: "Escolher plano" },
  { id: "100gb", dataLabel: "100 GB", dataGb: 100, cta: "Escolher plano" },
];

/** Preços internos para CMS futuro — não exibir na landing. */
export const planPrices: Record<string, number> = {
  "3gb": 29.99,
  "12gb": 39.99,
  "20gb": 49.99,
  "50gb": 69.99,
  "80gb": 99.9,
  "100gb": 109.9,
};

export const defaultPlanGb = 20;

/** Menor franquia que cobre a necessidade. */
export function recommendPlan(neededGb: number): Plan {
  const match = plans.find((plan) => plan.dataGb >= neededGb);
  return match ?? plans[plans.length - 1];
}

export const trustStats = [
  {
    value: "Desde 2007",
    label: "Experiência em telecom",
  },
  {
    value: "13 estados",
    label: "Atuação no Brasil",
  },
  {
    value: "Independente",
    label: "Sem vínculo com operadoras",
  },
  {
    value: "Humano",
    label: "Atendimento especializado",
  },
] as const;

export const experienceCards = [
  {
    index: "01",
    title: "Planos inteligentes",
    text: "Escolha o plano que realmente combina com você.",
  },
  {
    index: "02",
    title: "Atendimento humano",
    text: "Quando precisar, fale com quem resolve.",
  },
  {
    index: "03",
    title: "Tudo sob controle",
    text: "Tenha clareza sobre suas linhas, consumo e serviços.",
  },
] as const;

export const businessBenefits = [
  {
    title: "Gestão de linhas",
    text: "Especialistas ativam, acompanham e organizam cada linha da operação.",
  },
  {
    title: "Controle de custos",
    text: "Profissionais analisam contas e simplificam o que a empresa paga.",
  },
  {
    title: "Suporte especializado",
    text: "Um time dedicado, que entende telecom e resolve com objetividade.",
  },
  {
    title: "Soluções personalizadas",
    text: "Planos, links e gestão desenhados com você — não por um aplicativo.",
  },
] as const;

export const businessTeam = [
  { index: "01", role: "Consultoria em telecom" },
  { index: "02", role: "Gestão de linhas" },
  { index: "03", role: "Análise de custos" },
  { index: "04", role: "Atendimento dedicado" },
] as const;

export const supportMessages = [
  { from: "user", text: "Olá, preciso de ajuda com minha linha." },
  { from: "luxus", text: "Claro. Vamos resolver isso para você." },
  { from: "user", text: "Meu plano acabou." },
  { from: "luxus", text: "Vou verificar suas opções." },
  { from: "user", text: "Quero contratar um plano." },
  { from: "luxus", text: "Posso te ajudar." },
] as const;

export const footerLinks = {
  produtos: [
    { href: "#planos", label: "Planos" },
    { href: "#telefonia", label: "Telefonia" },
    { href: "#internet", label: "Internet" },
    { href: "#empresas", label: "Empresas" },
  ],
  empresa: [
    { href: "#sobre", label: "Sobre" },
    { href: "#suporte", label: "Suporte" },
    { href: "#contato", label: "Contato" },
  ],
  legal: [
    { href: "/privacidade", label: "Política de Privacidade" },
    { href: "/termos", label: "Termos de Uso" },
  ],
} as const;

export const whatsappPrefill: Record<string, string> = {
  default: "Olá, quero conhecer a Luxus Telefonia.",
  planos: "Olá, quero conhecer os planos da Luxus Telefonia.",
  especialista: "Olá, quero falar com um especialista da Luxus.",
  empresas: "Olá, quero conhecer as soluções empresariais da Luxus.",
  suporte: "Olá, preciso de suporte com a Luxus Telefonia.",
  contratar: "Olá, quero contratar um plano com a Luxus.",
};
