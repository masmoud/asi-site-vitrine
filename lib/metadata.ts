import favicon from "../app/favicon.ico";
import thumbnail from "../public/assets/images/asi-logo-bg.jpg";

export const siteMetadata = {
  title: "Aswer Sécurité Incendie à 93100 Montreuil",
  description:
    "Aswer Sécurité Incendie assure la sécurité incendie, le gardiennage et l’intervention sur alarme pour entreprises et particuliers en Ile-de-France.",
  keywords: [
    "sécurité incendie",
    "sécurité",
    "Montreuil",
    "93100",
    "gardiennage Montreuil",
    "intervention alarme",
    "services sécurité Ile-de-France",
    "micro-entreprise sécurité",
  ],
  icons: {
    icon: favicon.src,
  },
  openGraph: {
    type: "website",
    siteName: "Aswer Sécurité Incendie",
    locale: "fr_FR",
    url: "https://aswersecuriteincendie.fr/",
    images: [
      {
        url: thumbnail.src,
        width: 1260,
        height: 800,
        alt: "Aswer Sécurité Incendie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswer Sécurité Incendie",
    description: "Sécurité incendie et gardiennage en Île-de-France",
    images: [thumbnail.src],
  },
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  jsonLD: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aswer Sécurité Incendie",
    url: "https://aswersecuriteincendie.fr/",
    image: thumbnail.src,
    telephone: "+33619908273",
    address: {
      "@type": "PostalAddress",
      streetAddress: "56 rue Rochebrune",
      addressLocality: "Montreuil",
      addressRegion: "Ile-de-France",
      postalCode: "93100",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8636,
      longitude: 2.443,
    },
    priceRange: "€",
    description:
      "Aswer Sécurité Incendie assure la sécurité incendie, le gardiennage et l’intervention sur alarme pour entreprises et particuliers en Ile-de-France.",
  },
};
