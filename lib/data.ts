interface Service {
  id: string;
  name: string;
  image: string;
  alt: string;
  desc: string;
}

interface Section {
  text: string;
  path: string;
}

interface Phone {
  href: string;
  text: string;
}

interface Email {
  href: string;
  text: string;
}

interface ServiceDetail {
  id: string;
  overview: string;
  benefits: string[];
  process: string;
}

const services: Service[] = [
  {
    id: "service1",
    name: "Sécurité Incendie",
    image: "/assets/images/asi-incendie.jpg",
    alt: "photo d'extincteurs éteignant un feu",
    desc: "Nous assurons la protection de vos locaux et des personnes se trouvant à l'intérieur dans le respect des consignes de sécurité.",
  },
  {
    id: "service3",
    name: "Sécurité évènementielle",
    image: "/assets/images/asi-party.webp",
    alt: "photo de mains levées à un concert",
    desc: "Notre priorité est de faire de votre évènment un véritable succès. Nous gérons la sécurité des lieux, personnes, et biens. ",
  },

  {
    id: "service4",
    name: "Intervention sur alarme",
    image: "/assets/images/asi-alarm.jpeg",
    alt: "photo d'une main déclenchant un alarme",
    desc: "En cas de déclenchement de votre alarme, nous intervenons rapidement.",
  },
  {
    id: "service5",
    name: "Vente de matériel de sécurité",
    image: "/assets/images/asi-hero2.webp",
    alt: "photo d'équipements de sécurité",
    desc: "Selon vos besoins, nous vous fournissons en matériels de sécurité.",
  },
  {
    id: "service6",
    name: "Gardiennage et surveillance de sites",
    image: "/assets/images/asi-gardien.jpg",
    alt: "photo d'un agent de sécurité avec une station de radio",
    desc: "Nous offrons des solutions de gardiennage et surveillance qui s'adaptent à vos besoins et contraintes.",
  },
];

const sections: Section[] = [
  {
    text: "Accueil",
    path: "#accueil",
  },
  {
    text: "Services",
    path: "#services",
  },
  {
    text: "Contact",
    path: "#contact",
  },
];

const phones: Phone[] = [
  { href: "tel:+33651466424", text: "+33.6.19.90.82.73" },
  { href: "tel:+33619908273", text: "+33.6.51.46.64.24" },
  { href: "tel:+33652801556", text: "+33.6.52.80.15.56" },
];

const emails: Email[] = [
  { href: "mailto:prezyaswer13@gmail.com", text: "prezyaswer13@gmail.com" },
  { href: "mailto:prezy_aswer@yahoo.fr", text: "prezy_aswer@yahoo.fr" },
  { href: "mailto:melaynecmr@gmail.com", text: "melaynecmr@gmail.com" },
];

export const serviceDetails: ServiceDetail[] = [
  {
    id: "service1",
    overview:
      "Protégez vos locaux et vos collaborateurs contre les risques d’incendie.",
    benefits: [
      "Équipements certifiés conformes aux normes NF",
      "Plans de prévention sur mesure",
      "Interventions rapides en cas d’alerte",
    ],
    process: "Inspection → Installation → Formation → Maintenance",
  },
  {
    id: "service3",
    overview: "Assurez la sécurité de vos événements privés ou professionnels.",
    benefits: [
      "Agents formés à la gestion des foules",
      "Plan de sécurité adapté au lieu",
      "Coordination avec les secours",
    ],
    process: "Analyse du lieu → Mise en place → Supervision → Rapports",
  },
  {
    id: "service4",
    overview: "Intervention rapide lors du déclenchement de vos alarmes.",
    benefits: [
      "Déplacement en moins de 30 minutes",
      "Diagnostic et sécurisation immédiate",
      "Rapport d’intervention détaillé",
    ],
    process: "Réception alarme → Déplacement → Vérification → Résolution",
  },
  {
    id: "service5",
    overview: "Fourniture de matériels de sécurité adaptés à vos besoins.",
    benefits: [
      "Extincteurs, détecteurs, équipements anti-incendie",
      "Installation et mise en service",
      "Maintenance et suivi régulier",
    ],
    process: "Conseil → Vente → Installation → Suivi",
  },
  {
    id: "service6",
    overview: "Surveillance et gardiennage sur vos sites selon vos besoins.",
    benefits: [
      "Patrouilles régulières",
      "Contrôle des accès",
      "Rapports journaliers détaillés",
    ],
    process:
      "Analyse du site → Mise en place des rondes → Surveillance → Reporting",
  },
];

export const data = {
  services,
  sections,
  phones,
  emails,
  serviceDetails,
};
