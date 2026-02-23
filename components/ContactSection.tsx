"use client";
import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const FormPremium = dynamic(() => import("../components/FormPremium"), {
  ssr: false,
});

const ContactSection = () => (
  <section
    id="contact"
    className="py-24 px-8 lg:px-32 bg-gray-50 rounded-2xl shadow-md"
  >
    <SectionHeader
      title="Demandez votre devis gratuit"
      subtitle=" Intervention rapide à Montreuil (93100) et en Île-de-France. Réponse
        sous 24h."
    />

    <div className="max-w-4xl mx-auto">
      <FormPremium />
    </div>
  </section>
);

export default ContactSection;
