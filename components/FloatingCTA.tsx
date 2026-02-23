"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY < 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="#contact"
      className={`fixed bottom-6 right-6 z-50 bg-red-700 hover:bg-red-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-20"
      }`}
    >
      <Plus size={18} /> Demander un devis
    </Link>
  );
};

export default FloatingCTA;
