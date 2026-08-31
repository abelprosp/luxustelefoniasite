import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ContactProvider } from "@/components/providers/ContactProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

function metadataBaseUrl() {
  try {
    return new URL(site.url);
  } catch {
    return new URL("https://luxustelefonia.com.br");
  }
}

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Luxus Telefonia",
    "Grupo Luxus",
    "planos de telefonia",
    "gestão de linhas",
    "suporte telefonia",
    "telecom empresas",
    "internet empresarial",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-luxus-paper font-sans text-luxus-black">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Ir para o conteúdo
        </a>
        <JsonLd />
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
