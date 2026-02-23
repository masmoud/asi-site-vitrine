import FormPremium from "./FormPremium";
import SectionHeader from "./SectionHeader";

const ContactSection = () => (
  <section
    id="contact"
    className="py-24 px-8 lg:px-32 bg-gray-100 rounded-2xl shadow-md"
  >
    {/* <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">
        Demandez votre devis gratuit
      </h2>
      <p className="mt-4 text-gray-700">
        Intervention rapide à Montreuil (93100) et en Île-de-France. Réponse
        sous 24h.
      </p>
    </div> */}

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
