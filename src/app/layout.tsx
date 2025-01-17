import type { Metadata } from "next";
// import { Nunito_Sans } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema de Emissão e Gerenciamento de Documentos de Segurança",
  description:
    "Simplifique a criação de Fichas de Dados de Segurança (FDS), Fichas de Emergência e Rótulos GHS com nosso sistema completo para sua empresa.",
  keywords: "FDS, Ficha de Dados de Segurança, GHS, documentos de segurança, gestão de documentos",
  authors: [{ name: "Nome da sua empresa", url: "https://seusite.com" }],
  openGraph: {
    title: "Sistema de Emissão e Gerenciamento de Documentos de Segurança",
    description:
      "Simplifique a criação de Fichas de Dados de Segurança (FDS), Fichas de Emergência e Rótulos GHS com nosso sistema completo para sua empresa.",
    images: ["/logo-fds-docs.svg"],
    url: "https://seusite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
