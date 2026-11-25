import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "./../fonts/Archivo-latin.woff2",
  variable: "--font-archivo",
  display: "swap",
  style: "normal",
});

const inter = localFont({
  src: "./../fonts/Inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: "MEKAZONE — Pièces auto, moto et tech",
  description:
    "MEKAZONE : pièces, accessoires et équipements pour l'automobile, la moto et la tech.",
  icons: {
    icon: "/brand/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivo.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-gris-clair font-inter text-noir antialiased">
        {children}
      </body>
    </html>
  );
}
