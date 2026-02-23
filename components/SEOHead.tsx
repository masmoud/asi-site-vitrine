"use client";

import { metadata } from "@/lib/metadata";
import Head from "next/head";
import Script from "next/script";
import thumbnail from "../public/assets/images/asi-logo-bg.jpg";

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function SEOHead({
  title,
  description,
  url,
  image,
}: SEOHeadProps) {
  const pageTitle = title
    ? `${title} | Aswer Sécurité Incendie`
    : metadata.defaultTitle;
  const pageDescription = description || metadata.defaultDescription;
  const pageURL = url || metadata.metadataBase.toString();
  const pageImage = image || thumbnail.src;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={metadata.icons.icon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageURL} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:alt" content="Aswer Sécurité Incendie" />
      </Head>

      {/* JSON-LD Local SEO */}
      <Script id="schema-org" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Aswer Sécurité Incendie",
          "image": "${pageImage}",
          "url": "${pageURL}",
          "telephone": "+33619908273",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "56 rue Rochebrune",
            "addressLocality": "Montreuil",
            "addressRegion": "Ile-de-France",
            "postalCode": "93100",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.8636,
            "longitude": 2.4430
          },
          "priceRange": "€",
          "description": "${pageDescription}"
        }
        `}
      </Script>

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content={metadata.verification.google}
      />
    </>
  );
}
