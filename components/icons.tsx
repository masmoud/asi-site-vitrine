import dynamic from "next/dynamic";

export const UserIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.User),
  {
    ssr: false,
  },
);
export const BuildingIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.Building),
  { ssr: false },
);
export const MailIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.Mail),
  {
    ssr: false,
  },
);
export const PhoneIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.Phone),
  { ssr: false },
);
export const MessageCircleIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.MessageCircle),
  { ssr: false },
);
