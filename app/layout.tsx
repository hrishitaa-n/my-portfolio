import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Hrishitaa Nalawade — AI & Backend Engineer",
  description:
    "Portfolio of Hrishitaa Nalawade — projects in LLM integration, NLP, backend systems, and ML",
  openGraph: {
    title: "Hrishitaa Nalawade — AI & Backend Engineer",
    description:
      "Portfolio of Hrishitaa Nalawade — projects in LLM integration, NLP, backend systems, and ML",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
