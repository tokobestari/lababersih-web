import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LabaBersih — Kelola Keuangan Toko Online Jadi Mudah",
  description:
    "Aplikasi keuangan, inventori, dan manajemen RTS untuk seller online Indonesia. Satu dashboard, semua kebutuhan jualan.",
  metadataBase: new URL("https://lababersih.com"),
  openGraph: {
    title: "LabaBersih — Kelola Keuangan Toko Online Jadi Mudah",
    description:
      "Aplikasi keuangan, inventori, dan manajemen RTS untuk seller online Indonesia. Satu dashboard, semua kebutuhan jualan.",
    siteName: "LabaBersih",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
