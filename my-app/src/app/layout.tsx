import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VirtualLink",
  description:
    "VirtualLink: internet rápida e confiável. Escolha entre nossos planos de banda larga para casa ou empresa. Com fibra óptica de alta qualidade, garantimos downloads, uploads e streaming sem atrasos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className="scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full"
    >
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
