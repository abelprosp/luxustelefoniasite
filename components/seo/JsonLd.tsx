import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TelecommunicationsCompany",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    foundingDate: String(site.foundedYear),
    email: site.contact.email,
    telephone: `+${site.contact.phoneE164}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.headquarters.street,
      addressLocality: site.headquarters.city,
      addressRegion: site.headquarters.state,
      postalCode: site.headquarters.postalCode,
      addressCountry: site.headquarters.country,
    },
    sameAs: [site.social.linkedin].filter(Boolean),
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    parentOrganization: {
      "@type": "Organization",
      name: site.legalName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
