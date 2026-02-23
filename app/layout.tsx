import { Inter } from "next/font/google";
import { Toaster } from "../components/ui/sonner";
import "./globals.css";

import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import thumbnail from "../public/assets/images/asi-logo-bg.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <SEOHead
          title="Aswer Sécurité Incendie à Montreuil - Sécurité incendie et gardiennage"
          description="Aswer Sécurité Incendie protège vos locaux et événements en Ile-de-France : sécurité incendie, intervention sur alarme, gardiennage et vente de matériel."
          image={thumbnail.src}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <FloatingCTA />
          <Header />
          <main className="flex flex-col">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      </body>
    </html>
  );
}
