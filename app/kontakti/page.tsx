import type { Metadata } from "next";
import { createElement } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactCard from "@/components/ContactCard";
import Button from "@/components/Button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any;
    }
  }
}

export const metadata: Metadata = {
  title: "Kontakti",
  description:
    "Sazinieties ar Šēra Labsajūtas Studiju Tukumā — Elizabetes iela 14. Pieteikties vizītei pa tālruni vai e-pastu.",
};

export default function KontaktiPage() {
  return (
    <div>
      <PageHeader title="Kontakti" />

      <section className="container-studio py-20 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-8">
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
              value="Pēc iepriekšēja pieraksta"
            />

            <Button
              href="tel:+37129704783"
              className="mt-4 w-fit"
            >
              Pieteikt vizīti
            </Button>
          </div>

          {createElement(
            "div",
            { className: "overflow-hidden rounded-2xl h-80 md:h-full min-h-[320px]" },
            createElement("iframe", {
              title: "Šēra Labsajūtas Studija karte",
              src: "https://www.google.com/maps?q=Elizabetes+iela+14,+Tukums,+Latvia&output=embed",
              className: "h-full w-full border-0",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
            }),
          )}
        </div>
      </section>
    </div>
  );
}
