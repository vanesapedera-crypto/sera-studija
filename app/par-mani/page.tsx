import type { Metadata } from "next";
import { Heart, Sparkles, Leaf } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Par mani",
  description:
    "Iepazīstieties ar Renāti — sertificētu masieri Tukumā, kas palīdz sievietēm atgūt mieru, līdzsvaru un labsajūtu.",
};

const cards = [
  {
    icon: Heart,
    title: "Rūpes par sievieti",
    text: "Masāža ir laiks, kurā vari apstāties, atvilkt elpu un atkal sajust sevi.",
  },
  {
    icon: Sparkles,
    title: "Pieskāriens ar nozīmi",
    text: "Katrs pieskāriens ir vērsts uz relaksāciju, viegluma sajūtu un iekšējo līdzsvaru.",
  },
  {
    icon: Leaf,
    title: "Individuāla pieeja",
    text: "Katra procedūra tiek pielāgota tieši Tavām vajadzībām un pašsajūtai.",
  },
];

export default function ParManiPage() {
  return (
    <div className="pt-28 md:pt-25">
      <section className="container-studio grid items-center gap-20 py-20 lg:grid-cols-[0.95fr_1fr] lg:py-28">
        {/* FOTO */}
        <div className="relative h-[600px] overflow-hidden rounded-[32px] shadow-xl md:h-[760px]">
          <Image
            src="/par-mani.jpg"
            alt="Renāte, sertificēta masiere"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* SATURS */}
        <div>
          <h1 className="font-heading text-5xl text-brown md:text-6xl">
            Par mani
          </h1>

          <p className="mt-5 border-l-2 border-gold pl-5 text-lg italic leading-relaxed text-brown/80">
            "Kad sieviete izvēlas parūpēties par sevi, viņa spēj dot vairāk arī
            citiem."
          </p>

          <div className="mt-8 space-y-6 font-body text-base leading-8 text-dark/75">
            <p>
              Es esmu estētiskās ķermeņa kopšanas speciāliste, trīs dēlu mamma un sieviete, kura tic,
              ka rūpes par sevi nav greznība, bet nepieciešamība.
            </p>

            <p>
              Man masāža ir daudz vairāk nekā procedūra – tas ir laiks, kurā
              sieviete var apstāties, atpūsties no ikdienas steigas un atkal
              sadzirdēt sevi.
            </p>

            <p>
              Ticu, ka sievietes labsajūta sākas brīdī, kad viņa izvēlas
              parūpēties par sevi. Tikai piepildīta sieviete spēj ar mīlestību
              dot savu enerģiju ģimenei, darbam un apkārtējiem.
            </p>

            <p>
              Ar maigu, intuitīvu un profesionālu pieskārienu palīdzu atbrīvot
              ķermeni no saspringuma, atgūt viegluma sajūtu un stiprināt saikni
              ar savu sievišķību. Lai gan īpaši tuva man ir iespēja rūpēties par
              sievietēm, veicu arī sporta masāžas, kuras novērtē gan aktīva
              dzīvesveida piekritēji, gan vīrieši.
            </p>

            <p>
              Mana vēlme ir, lai katrs klients pēc masāžas aiziet ne tikai ar
              atslābinātu ķermeni, bet arī ar mierīgāku prātu, vieglāku sirdi un
              sajūtu, ka ir izvēlējies sevi.
            </p>
          </div>
        </div>
      </section>

      {/* VĒRTĪBAS */}
      <section className="bg-beige/30 py-20 md:py-24">
        <div className="container-studio grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-beige text-brown">
                <card.icon size={30} strokeWidth={1.7} />
              </div>

              <h3 className="mt-6 font-heading text-2xl text-brown">
                {card.title}
              </h3>

              <p className="mt-4 font-body leading-7 text-dark/70">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}