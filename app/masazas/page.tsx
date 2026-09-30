import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { massages } from "@/data/massages";

export const metadata: Metadata = {
  title: "Masāžas",
  description:
    "Pilns masāžu klāsts Šēra Labsajūtas Studijā Tukumā — no klasiskās ķermeņa masāžas līdz karsto akmeņu un šokolādes masāžai.",
};

export default function MasazasPage() {
  return (
    <div>
      <PageHeader
        title="Masāžas"
        description="Katra masāža tiek veikta ar rūpību un individuālu pieeju, lai palīdzētu Jums atgūt līdzsvaru un mieru. Uzklikšķiniet uz procedūras, lai uzzinātu vairāk."
      />

      <section className="container-studio py-20 md:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {massages.map((m, i) => (
            <ServiceCard
              key={m.slug}
              index={i}
              slug={m.slug}
              image={m.image}
              title={m.title}
              description={m.shortDescription}
              prices={m.prices}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
