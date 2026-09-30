import Image from "next/image";
import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown text-background">
      <div className="container-studio py-16 grid gap-12 md:grid-cols-3 items-start">

        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Šēra Labsajūtas Studija"
              width={220}
              height={80}
              className="h-20 w-auto"
            />
          </Link>
        </div>

        {/* Apraksts */}
        <div>
          <p className="max-w-sm leading-8 text-background/80">
            Labsajūtas studija Tukumā, kur harmonija, miers un profesionālas
            procedūras palīdz atgūt līdzsvaru ķermenim un prātam.
          </p>
        </div>

        {/* Kontakti */}
        <div className="space-y-5">

          <a
            href="tel:+37129704783"
            className="flex items-center gap-3 hover:text-gold transition-colors"
          >
            <Phone size={18} />
            <span>29704783</span>
          </a>

          <a
            href="mailto:renate-sera@inbox.lv"
            className="flex items-center gap-3 hover:text-gold transition-colors"
          >
            <Mail size={18} />
            <span>renate-sera@inbox.lv</span>
          </a>

          <a
            href="https://www.instagram.com/sera_tukums/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gold transition-colors"
          >
            <Instagram size={18} />
            <span>@sera_tukums</span>
          </a>

        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="container-studio py-6 flex flex-col md:flex-row justify-between items-center text-xs text-background/60 gap-2">
          <p>
            © {new Date().getFullYear()} Šēra Labsajūtas Studija.
          </p>

          <p>Visas tiesības aizsargātas.</p>
        </div>
      </div>
    </footer>
  );
}