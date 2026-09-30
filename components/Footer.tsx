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
  <div className="container-studio py-16">

    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16">

      {/* Kreisā puse */}
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

        <p className="mt-8 max-w-lg text-background/80 leading-8">
          Vieta, kur apstājas ikdienas steiga un sākas rūpes par
          Tavu ķermeni, mieru un labsajūtu.
        </p>
      </div>

      {/* Labā puse */}
      <div className="grid sm:grid-cols-2 gap-10">

        <div>
          <h3 className="font-heading text-xl mb-6">
            Kontakti
          </h3>

          <div className="space-y-5">

            <a
              href="tel:+37129704783"
              className="flex items-center gap-3 hover:text-gold transition"
            >
              <Phone size={18} />
              +371 29704783
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

        <div>
          <h3 className="font-heading text-xl mb-6">
            Darba laiks
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <Clock size={18} />
              Pēc iepriekšēja pieraksta
            </div>

            <p className="text-background/70 leading-7">
              Darba dienās un brīvdienās
              pēc iepriekšējas vienošanās.
            </p>

          </div>
        </div>

      </div>

    </div>

    <div className="mt-14 border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-background/60">
      <p>
        © {new Date().getFullYear()} Šēra Labsajūtas Studija
      </p>

      <p>
        Visas tiesības aizsargātas.
      </p>
    </div>

  </div>
</footer>
  );
}