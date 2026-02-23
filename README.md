# Aswer Sécurité Incendie – Site Vitrine

![Node.js](https://img.shields.io/badge/Node-20.19.0-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Next.js](https://img.shields.io/badge/Next.js-13.x-black)
![Vercel](https://img.shields.io/endpoint?url=https://vercel-badge.vercel.app/api/masmoud/asi-site-vitrine)
![Formspree](https://img.shields.io/badge/Formspree-active-brightgreen)

Site vitrine développé pour **Aswer Sécurité Incendie**, entreprise spécialisée en sécurité incendie, gardiennage et intervention sur alarmes à Montreuil, Île-de-France.

Le site présente les services proposés, permet de contacter l’entreprise via un formulaire sécurisé et fournit les mentions légales et la politique de confidentialité.

---

## Fonctionnalités

- Présentation des services : sécurité incendie, gardiennage, interventions sur alarmes, vente de matériel.
- Formulaire de contact sécurisé avec **Formspree** + backend Next.js.
- Pages légales : Mentions légales et Politique de confidentialité.
- Responsive design (mobile & desktop).
- SEO optimisé : OpenGraph, JSON-LD, Google verification.

---

## Technologies

- [Next.js 16 App Router](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Formspree](https://formspree.io/)
- [Lucide React](https://lucide.dev/) pour les icônes
- [Shadcn](https://ui.shadcn.com/)

---

## Installation

1. Cloner le dépôt :

```bash
git clone git@github.com:masmoud/asi-site-vitrine.git
cd asi-site-vitrine
```

2. Installer les dépendances :

```bash
npm install
```

3. Créer un fichier `.env` avec la clé Formspree :

```env
NEXT_PUBLIC_FORMSPREE_KEY=ton_identifiant_formspree
```

4. Lancer le serveur de développement :

```bash
npm run dev
```

5. Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Déploiement

Le site peut être déployé sur **Vercel** :

1. Connecter le dépôt GitHub à Vercel.
2. Ajouter la variable d’environnement `NEXT_PUBLIC_FORMSPREE_KEY` dans le dashboard Vercel.
3. Déployer.
4. Le badge Vercel se mettra automatiquement à jour pour refléter le statut du déploiement.

---

## Structure du projet

```text
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ api/
│  │   └─ contact/route.ts
│  ├─ mentions-legales/
│  └─ politique-confidentialite/
├─ components/
├─ lib/
├─ public/
├─ styles/
└─ package.json
```

---

## Contribuer / Maintenance

- Ce projet est la **propriété du client**.
- Pour maintenance ou ajouts : créer une branche, tester en local, puis merger.
- Toutes contributions doivent être validées par le client.

---

## Contact

- Email : [prezyaswer13@gmail.com](mailto:prezyaswer13@gmail.com)
- Téléphone : +33 6 19 90 82 73

> **Note** : Ce projet est la propriété d’**Aswer Sécurité Incendie**. Tous droits réservés.
