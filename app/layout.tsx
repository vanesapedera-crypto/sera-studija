import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sera-labsajutas-studija.lv"),
  title: {
    default: "Šēra Labsajūtas Studija | Masāžas un vaksācija Tukumā",
    template: "%s | Šēra Labsajūtas Studija",
  },
  description:
    "Profesionālas masāžas un vaksācijas procedūras Tukumā. Miers ķermenim, līdzsvars prātam — Šēra Labsajūtas Studija.",
  keywords: [
    "masāžas Tukums",
    "vaksācija Tukums",
    "labsajūtas studija",
    "spa Tukums",
    "relaksējoša masāža",
  ],
  openGraph: {
    title: "Šēra Labsajūtas Studija",
    description:
      "Profesionālas masāžas un vaksācijas procedūras Tukumā. Miers ķermenim, līdzsvars prātam.",
    url: "https://sera-labsajutas-studija.lv",
    siteName: "Šēra Labsajūtas Studija",
    locale: "lv_LV",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv" className={`${cormorant.variable} ${poppins.variable}`}>
      <body className="font-body bg-background text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
