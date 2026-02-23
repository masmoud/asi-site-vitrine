import { data } from "@/lib/data";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/images/aswer-logo.png";

const Header = () => (
  <header id="accueil" className="relative w-full bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-20 px-6 lg:px-32 gap-8">
      {/* Logo sur fond blanc pour contraste */}
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <Image
          src={logo}
          alt="Logo Aswer"
          width={300}
          height={300}
          className="rounded-xl"
        />
      </div>

      {/* Titre et slogan */}
      <h1 className="text-4xl lg:text-5xl font-bold drop-shadow-lg">
        Aswer Sécurité Incendie
      </h1>
      <p className="text-lg lg:text-2xl text-white/90 max-w-2xl">
        Protection de vos locaux et sécurité des personnes en Ile-de-France
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href={`tel:${data.phones[0].href}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg transition"
        >
          <Phone size={18} /> {data.phones[0].text}
        </a>
        <Link
          href="#contact"
          className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Demander un devis
        </Link>
      </div>
    </div>

    {/* Flèche scroll */}
    <Link
      href="#services"
      className="absolute bottom-10 animate-bounce text-white text-3xl"
    >
      ↓
    </Link>
  </header>
);

export default Header;
