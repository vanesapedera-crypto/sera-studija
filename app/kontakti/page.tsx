import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactCard from "@/components/ContactCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kontakti",
  description:
    "Sazinieties ar Šēra Labsajūtas Studiju Tukumā un rezervējiet savu vizīti.",
};

export default function KontaktiPage() {
  return (
    <>
      <PageHeader title="Kontakti" />

      <section className="container-studio py-20">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Kreisā puse */}
          <div className="space-y-6">
            <h2 className="font-heading text-4xl text-brown">
              Sazinieties ar mani
            </h2>

            <p className="text-lg text-stone-600 leading-8 max-w-lg">
              Ja vēlaties rezervēt procedūru vai uzdot jautājumu,
              sazinieties pa telefonu, e-pastu vai Instagram.
            </p>

            <div className="space-y-5 pt-4">
              <ContactCard
                icon={MapPin}
                label="Adrese"
                value={"Elizabetes iela 14\nTukums"}
              />

              <ContactCard
                icon={Phone}
                label="Tālrunis"
                value="29704783"
                href="tel:+37129704783"
              />

              <ContactCard
                icon={Mail}
                label="E-pasts"
                value="renate-sera@inbox.lv"
                href="mailto:renate-sera@inbox.lv"
              />

              <ContactCard
                icon={Clock}
                label="Darba laiks"
                value={
                  "Pēc iepriekšēja pieraksta\nDarba dienās un brīvdienās."
                }
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button href="tel:+37129704783">
                Pieteikt vizīti
              </Button>

              <Button
                href="https://www.instagram.com/sera_tukums/"
                variant="outline"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Karte */}
          <div className="overflow-hidden rounded-3xl shadow-xl border border-stone-200 h-[520px]">
            <iframe
              title="Šēra Labsajūtas Studija"
              src="https://www.google.com/maps?q=Elizabetes+iela+14,+Tukums,+Latvia&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}