import type { Metadata } from "next";
import {
  PersonStanding,
  Hand,
  Footprints,
  Wind,
  Flower2,
} from "lucide-react";

import PageHeader from "@/components/PageHeader";
import PriceCard from "@/components/PriceCard";

export const metadata: Metadata = {
  title: "Vaksācija",
  description:
    "Vaska depilācijas cenas Šēra Labsajūtas Studijā Tukumā — rokas, kājas, paduses, bikini un pilna ķermeņa vaksācija.",
};

const items = [
  {
    icon: <PersonStanding size={26} strokeWidth={1.5} />,
    title: "Pilna ķermeņa",
    detail: "Rokas, kājas, bikini, paduses",
    price: "60 €",
  },
  {
    icon: <Hand size={26} strokeWidth={1.5} />,
    title: "Rokas",
    price: "15 €",
  },
  {
    icon: <Footprints size={26} strokeWidth={1.5} />,
    title: "Kājas",
    price: "20–25 €",
  },
  {
    icon: <Wind size={26} strokeWidth={1.5} />,
    title: "Paduses",
    price: "10–15 €",
  },
  {
    icon: <Flower2 size={26} strokeWidth={1.5} />,
    title: "Bikini",
    price: "25–30 €",
  },
];

export default function VaksacijaPage() {
  return (
    <div>
      <PageHeader
        title="Vaksācija"
        description="Gluda āda, saudzīga procedūra un ilgstošs rezultāts — vaska depilācija profesionālā un mierpilnā vidē."
      />

      <section className="container-studio py-20 md:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <PriceCard
              key={item.title}
              index={i}
              icon={item.icon}
              title={item.title}
              detail={item.detail}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}