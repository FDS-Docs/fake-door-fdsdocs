import type { Metadata } from "next";
// import { Nunito_Sans } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "FDS Docs",
  icons: 'logo-fds-docs.svg',
  description:
    "Simplifique a criação de Fichas de Dados de Segurança (FDS), Fichas de Emergência e Rótulos GHS com nosso sistema completo para sua empresa.",
  keywords: "FDS Docs, FDS Docs sistema, FDS documentos",
  authors: [{ 
      name: "FDS Docs", 
      url: "https://fake-door-fdsdocs.vercel.app/" 
      }],
  openGraph: {
    title: "Sistema de Emissão e Gerenciamento de Documentos de Segurança",
    description:
      "Simplifique a criação de Fichas de Dados de Segurança (FDS), Fichas de Emergência e Rótulos GHS com nosso sistema completo para sua empresa.",
    images: ["/logo-fds-docs.svg"],
    url: "https://fake-door-fdsdocs.vercel.app/",
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
