import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Users } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import {
  type Massage,
  getAdjacentMassages,
  getRelatedMassages,
} from "@/data/massages";

export default function MassageTemplate({ massage }: { massage: Massage }) {
  const { prev, next } = getAdjacentMassages(massage.slug);
  const related = getRelatedMassages(massage.slug, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={massage.image}
          alt={massage.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/25 to-dark/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-studio pb-12">
            <h1 className="font-heading text-4xl md:text-6xl text-background max-w-2xl">
              {massage.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="container-studio pt-8">
        <Breadcrumbs
          items={[
            { label: "Sākums", href: "/" },
            { label: "Masāžas", href: "/masazas" },
            { label: massage.title },
          ]}
        />
      </div>

      {/* Content */}
      <section className="container-studio py-14 md:py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-16">
          <div className="md:col-span-2">
            <p className="font-heading text-2xl md:text-3xl leading-relaxed text-brown">
              {massage.shortDescription}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {massage.description.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base leading-relaxed text-dark/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="font-heading text-2xl text-brown">Ieguvumi</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {massage.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 font-body text-sm text-dark/75"
                  >
                    <Check size={18} className="mt-0.5 shrink-0 text-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="font-heading text-2xl text-brown">
                Kam šī procedūra ir piemērota?
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {massage.suitableFor.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 font-body text-sm text-dark/75"
                  >
                    <Users size={18} className="mt-0.5 shrink-0 text-gold" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-32 rounded-2xl bg-beige/30 p-8">
              <p className="font-body text-xs uppercase tracking-wider text-dark/50">
                Ilgums
              </p>
              <p className="mt-1 font-heading text-2xl text-brown">
                {massage.duration}
              </p>

              <div className="mt-6 flex flex-col gap-2 border-t border-beige pt-6">
                {massage.prices.map((p) => (
                  <div
                    key={p.duration}
                    className="flex items-center justify-between font-body text-sm text-dark"
                  >
                    <span className="text-dark/60">{p.duration}</span>
                    <span className="font-heading text-xl text-gold">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>

              <Button href="/kontakti" className="mt-8 w-full">
                Pieteikt vizīti
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related massages */}
      <section className="bg-beige/20 py-20 md:py-24">
        <div className="container-studio">
          <h2 className="font-heading text-3xl md:text-4xl text-brown text-center">
            Citas masāžas, kas Jums varētu patikt
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((m, i) => (
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
        </div>
      </section>

      {/* Prev / Next */}
      <section className="container-studio py-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href={`/masazas/${prev.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-beige/70 px-6 py-5 transition-all duration-300 hover:border-gold/60 hover:-translate-y-0.5"
          >
            <ArrowLeft
              size={20}
              className="shrink-0 text-gold transition-transform duration-300 group-hover:-translate-x-1"
            />
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-dark/45">
                Iepriekšējā
              </p>
              <p className="font-heading text-lg text-brown">{prev.title}</p>
            </div>
          </Link>

          <Link
            href={`/masazas/${next.slug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-beige/70 px-6 py-5 text-right transition-all duration-300 hover:border-gold/60 hover:-translate-y-0.5 sm:flex-row-reverse sm:text-left"
          >
            <ArrowRight
              size={20}
              className="shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1"
            />
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-dark/45">
                Nākamā
              </p>
              <p className="font-heading text-lg text-brown">{next.title}</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
