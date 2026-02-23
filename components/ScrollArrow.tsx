"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ScrollArrowProps {
  targetId?: string; // id vers lequel scroller si on est sur l'accueil
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ targetId = "services" }) => {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/accueil";

  return isHome ? (
    // Flèche vers le bas animée
    <motion.div
      className="absolute bottom-10 text-white text-3xl"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
    >
      <Link
        href={`#${targetId}`}
        aria-label="Scroll vers les services"
        className="hover:text-red-500 transition-colors"
      >
        ↓
      </Link>
    </motion.div>
  ) : (
    // Flèche vers la gauche animée pour retour
    <motion.div
      className="absolute bottom-10 left-10 text-white text-3xl"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      <Link
        href="/"
        aria-label="Retour à l'accueil"
        className="hover:scale-125 transition-transform"
      >
        ←
      </Link>
    </motion.div>
  );
};

export default ScrollArrow;
