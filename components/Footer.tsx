import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown text-background">
      <div className="container-studio py-16 grid gap-12 md:grid-cols-3">

        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Šēra Labsajūtas Studija"
              width={240}
              height={90}
              className="h-24 w-auto"
            />
          </Link>

          <p className="mt-6 max-w-sm text-background/75 leading-8">
            Profesionālas masāžas un vaksācijas procedūras Tukumā.
            Miers ķermenim. Līdzsvars prātam.
          </p>
        </div>

        {/* Kontakti */}
        <div>
          <h3 className="font-heading text-xl mb-6">Kontakti</h3>

          <div className="space-y-4">

            <a
              href="tel:+37129704783"
              className="flex items-center gap-3 hover:text-gold transition"
            >
              <Phone size={18} />
              29704783
            </a>

            <a
              href="https://www.instagram.com/sera_tukums/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gold transition"
            >
              <Instagram size={18} />
              @sera_tukums
            </a>

          </div>
        </div>

        {/* Darba laiks */}
        <div>
          <h3 className="font-heading text-xl mb-6">
            Darba laiks
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Clock size={18} />
              Pēc iepriekšēja pieraksta
            </div>

            <p className="text-background/75 leading-7">
              Vizītes iespējamas darba dienās un
              brīvdienās pēc vienošanās.
            </p>

          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-studio py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-background/60">

          <p>
            © {new Date().getFullYear()} Šēra Labsajūtas Studija
          </p>

          <p>Visas tiesības aizsargātas.</p>

        </div>
      </div>
    </footer>
  );
}