"use client";

import { usePathname } from "next/navigation";

const HeaderTitle = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return isHome ? (
    <h1 className="text-4xl lg:text-5xl font-bold drop-shadow-lg">
      Aswer Sécurité Incendie
    </h1>
  ) : (
    <h2 className="text-4xl lg:text-5xl font-bold drop-shadow-lg">
      Aswer Sécurité Incendie
    </h2>
  );
};

export default HeaderTitle;
