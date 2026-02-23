import { data } from "@/lib/data";
import Link from "next/link";

const MentionsLegales = () => (
  <main className="max-w-4xl mx-auto py-16 px-6 lg:px-32 bg-gray-50 rounded-xl shadow-md">
    <h1 className="text-4xl font-bold mb-8 text-gray-900">Mentions légales</h1>
    {/* Éditeur du site */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Éditeur du site
      </h2>
      <p className="text-gray-700">
        Raison sociale : Aswer Sécurité Incendie – Micro-entreprise
        <br />
        Adresse : 56 rue Rochebrune, 93100 Montreuil, Île-de-France
        <br />
        SIREN : 123 456 789
        <br />
        Directeur de publication : ODY Gobolo Stéphane
        <br />
        Téléphone : 06 19 90 82 73
        <br />
        Email : {data.emails[0].text}
      </p>
    </section>
    {/* Hébergement */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Hébergement</h2>
      <p className="text-gray-700">
        Site hébergé par Vercel Inc.
        <br />
        Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
        <br />
        Téléphone : +1 510-682-1232
        <br />
        Site web :{" "}
        <a href="https://vercel.com" className="text-red-700 hover:underline">
          https://vercel.com
        </a>
      </p>
    </section>
    {/* Propriété intellectuelle */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Propriété intellectuelle
      </h2>
      <p className="text-gray-700">
        Tous les contenus présents sur ce site (textes, images, logos) sont la
        propriété d’Aswer Sécurité Incendie, sauf mention contraire. Toute
        reproduction, même partielle, est interdite sans autorisation.
      </p>
    </section>
    {/* Responsabilité */}
    <section>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Responsabilité
      </h2>
      <p className="text-gray-700">
        Les informations fournies sur ce site sont données à titre indicatif.
        Aswer Sécurité Incendie ne pourra être tenu responsable des erreurs,
        omissions ou conséquences liées à l’utilisation des informations
        publiées.
      </p>
    </section>
    <Link href="/" className="mt-8 inline-block text-red-700 hover:underline">
      Retour à l’accueil
    </Link>
    ;
  </main>
);

export default MentionsLegales;
