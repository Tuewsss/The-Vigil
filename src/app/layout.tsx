import type { Metadata } from "next";
import { Cinzel, EB_Garamond, Special_Elite } from "next/font/google";
import BloodIntro from "@/components/BloodIntro";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const specialElite = Special_Elite({
  variable: "--font-special",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "The Sacred Blood: The Vigil — Arquivos da Ordem",
  description:
    "Inglaterra, 1920. Uma ordem secreta zela pela trégua entre o mundo natural e o sobrenatural — até que algo decida romper o pacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${ebGaramond.variable} ${specialElite.variable}`}
    >
      <body>
        <BloodIntro />
        {children}
      </body>
    </html>
  );
}
