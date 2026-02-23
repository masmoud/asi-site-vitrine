import PolitiqueConfidentialite from "@/components/PolitiqueConfidentialite";
import { siteMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: `Politique de confidentialité | ${siteMetadata.title}`,
  description: `Politique de confidentialité de ${siteMetadata.title}. Explications sur la collecte et le traitement des données.`,
});

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialite />;
}
