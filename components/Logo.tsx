import Image from "next/image";
import logo from "../public/assets/images/aswer-logo.png";

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="Logo Aswer Sécurité Incendie"
      width={300}
      height={300}
      className="rounded-xl"
      style={{ color: "transparent" }}
      priority
    />
  );
}
