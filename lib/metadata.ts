import favicon from "../app/favicon.ico";
import thumbnail from "../public/assets/images/asi-logo-bg.jpg";

export const metadata = {
  metadataBase: new URL("https://aswersecuriteincendie.fr/"),
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
  authors: [
    {
      name: "Mohamed Amoussa",
      url: "https://www.linkedin.com/in/mohamed-amoussa",
    },
  ],
  creator: "Mohamed Amoussa",
  publisher: "Mohamed Amoussa",
  referrer: "origin-when-cross-origin",
  robots: { index: true, follow: true },
  verification: {
    google: "REMPLACÉ",
  },
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
  defaultTitle: "Aswer Sécurité Incendie à 93100 Montreuil",
  defaultDescription:
    "Aswer Sécurité Incendie à Montreuil (93100) assure la sécurité incendie, le gardiennage et l’intervention sur alarme pour entreprises et particuliers en Ile-de-France.",
};
