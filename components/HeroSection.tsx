import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/images/aswer-logo.png";

const HeroSection = () => (
  <section className="relative h-screen w-full flex items-center justify-center bg-gray-900">
    <Image
      src="/assets/images/asi-logo-bg.jpg"
      alt="Aswer Sécurité Incendie"
      fill
      className="object-cover brightness-50"
      priority
    />
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 text-center px-6 lg:px-32 flex flex-col items-center gap-6">
      <Image
        src={logo}
        alt="Logo Aswer"
        width={200}
        height={200}
        className="rounded-lg"
      />
      <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
        Aswer Sécurité Incendie
      </h1>
      <p className="text-lg lg:text-2xl text-white/90 max-w-2xl">
        Service de sécurité incendie & d&apos;aide aux personnes en
        Ile-de-France
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="tel:+33619908273"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg font-bold transition"
        >
          <Phone size={18} /> 06.19.90.82.73
        </a>
        <Link
          href="#contact"
          className="inline-block px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold transition"
        >
          Tous nos contacts
        </Link>
      </div>
      <Link
        href="#services"
        className="absolute bottom-10 animate-bounce text-white text-2xl"
      >
        ↓
      </Link>
    </div>
  </section>
);

export default HeroSection;
