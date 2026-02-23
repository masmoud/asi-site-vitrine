import MentionsLegales from "@/components/MentionsLegales";
import { siteMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: `Mentions légales | ${siteMetadata.title}`,
  description: `Mentions légales de ${siteMetadata.title}. Informations sur l'éditeur, l'hébergement et la propriété intellectuelle.`,
});

export default function MentionsLegalesPage() {
  return <MentionsLegales />;
}
