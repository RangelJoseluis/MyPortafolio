import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevJose Luis | Portafolio",
  description: "Portafolio profesional de Jose Luis R., Desarrollador Full Stack especializado en Java, Spring Boot, React y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white m-0 p-0`}
        style={{ backgroundColor: '#0a0e27' }}
      >
        {children}
      </body>
    </html>
  );
}
