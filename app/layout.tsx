import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psicanálise e Psicologia Intercultural | Laura Scafutto",
  description: "Terapia em psicanálise com escuta intercultural. Atendimentos online para brasileiros(as) no exterior e presencial em Belo Horizonte com Laura Scafutto, psicanalista e psicóloga especializada.",
  keywords: [
    "psicanalista online",
    "psicanalista online para brasileiros",
    "terapia online para brasileiros no exterior",
    "psicólogo online para brasileiros",
    "psicólogo para brasileiros imigrantes",
    "psicólogo para LGBTQIA+ online",
    "atendimento psicológico online",
    "terapia online",
    "psicanálise online para brasileiros",
    "psicanalista online para brasileiros no exterior"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
