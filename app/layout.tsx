import { Inter } from "next/font/google";
import { Toaster } from "../components/ui/sonner";
import "./globals.css";

import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { siteMetadata } from "@/lib/metadata";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = (): Metadata => ({
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords.join(", "),
  icons: siteMetadata.icons,
  openGraph: siteMetadata.openGraph,
  twitter: siteMetadata.twitter,
  verification: {
    google: siteMetadata.googleVerification,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <FloatingCTA />
          <Header />
          <main className="flex flex-col">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />
        </div>
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      </body>
    </html>
  );
}
