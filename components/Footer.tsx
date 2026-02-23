import { data } from "@/lib/data";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => (
  <footer className="py-10 px-8 lg:px-32 bg-gray-900 text-gray-300 text-center">
    {/* Contact principal */}
    <div className="flex flex-col items-center gap-2 mb-6">
      <a
        href={data.phones[0].href}
        className="flex items-center gap-2 hover:text-white transition"
      >
        <Phone size={16} />
        {data.phones[0].text}
      </a>

      <a
        href={data.emails[0].href}
        className="flex items-center gap-2 hover:text-white transition"
      >
        <Mail size={16} />
        {data.emails[0].text}
      </a>
    </div>

    {/* Navigation interne */}
    <div className="flex justify-center gap-6 mb-4">
      {data.sections.map((section) => (
        <Link
          key={section.path}
          href={section.path}
          className="hover:text-white transition"
        >
          {section.text}
        </Link>
      ))}
    </div>

    {/* Liens légaux */}
    <div className="flex justify-center gap-6 mb-2">
      <Link href="/mentions-legales" className="hover:text-white transition">
        Mentions légales
      </Link>
      <Link
        href="/politique-de-confidentialite"
        className="hover:text-white transition"
      >
        Politique de confidentialité
      </Link>
    </div>

    <p className="mt-4 text-sm">
      © 2026 Aswer Sécurité Incendie. Tous droits réservés.
    </p>
  </footer>
);

export default Footer;
