import { data } from "@/lib/data";
import Link from "next/link";

const PolitiqueConfidentialite = () => (
  <div className="max-w-4xl mx-auto py-16 px-6 lg:px-32 bg-gray-50 rounded-xl shadow-md">
    <h1 className="text-4xl font-bold mb-8 text-gray-900">
      Politique de confidentialité
    </h1>

    <section className="mb-6">
      <p className="text-gray-700">
        Chez Aswer Sécurité Incendie, nous respectons votre vie privée et nous
        nous engageons à protéger vos données personnelles. La présente
        politique explique quelles informations nous collectons et comment elles
        sont utilisées.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Données collectées
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Nom, prénom</li>
        <li>Email et téléphone</li>
        <li>Message ou demande via le formulaire de contact</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Finalité de la collecte
      </h2>
      <p className="text-gray-700">
        Les informations collectées servent uniquement à répondre à vos
        demandes, envoyer des devis et améliorer nos services.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Durée de conservation
      </h2>
      <p className="text-gray-700">
        Les données personnelles sont conservées uniquement le temps nécessaire
        au traitement de votre demande et ne seront pas conservées indéfiniment.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Droits des utilisateurs
      </h2>
      <p className="text-gray-700">
        Conformément au RGPD, vous avez le droit de demander l’accès, la
        rectification ou la suppression de vos données personnelles. Vous pouvez
        exercer ce droit en nous contactant à {data.emails[0].text}.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Cookies</h2>
      <p className="text-gray-700">
        Ce site n’utilise pas de cookies à des fins publicitaires. Des cookies
        techniques peuvent être utilisés pour le bon fonctionnement du site.
      </p>
    </section>

    <Link href="/" className="mt-8 inline-block text-red-700 hover:underline">
      Retour à l’accueil
    </Link>
  </div>
);

export default PolitiqueConfidentialite;
