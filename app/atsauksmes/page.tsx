import type { Metadata } from "next";
import { Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ReviewForm from "@/components/ReviewForm";
import { getReviews } from "@/lib/reviews";
import { massages } from "@/data/massages";
import { headSpa } from "@/data/headSpa";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Atsauksmes",
  description:
    "Klientu atsauksmes par Šēra Labsajūtas Studiju Tukumā. Dalieties arī Jūs ar savu pieredzi!",
};

const procedures = [
  ...massages.map((m) => m.title),
  headSpa.title,
  "Vaksācija",
  "Cits",
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("lv-LV", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function AtsauksmesPage() {
  const reviews = await getReviews();
  const average =
    reviews.length > 0
      ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
      : 0;

  return (
    <div>
      <PageHeader
        title="Atsauksmes"
        description="Jūsu pieredze iedvesmo mani turpināt."
      />

      <section className="container-studio py-20 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-16">
          <div className="md:col-span-2">
            {reviews.length > 0 && (
              <div className="mb-10 flex items-center gap-3">
                <Star size={24} className="fill-gold text-gold" />
                <span className="font-heading text-3xl text-brown">
                  {average.toFixed(1).replace(".", ",")}
                </span>
                <span className="font-body text-sm text-dark/60">
                  · {reviews.length}{" "}
                  {reviews.length % 10 === 1 && reviews.length % 100 !== 11
                    ? "atsauksme"
                    : "atsauksmes"}
                </span>
              </div>
            )}

            {reviews.length === 0 ? (
              <p className="font-body text-base text-dark/70">
                Pagaidām atsauksmju nav — esiet pirmais, kas dalās ar savu pieredzi!
              </p>
            ) : (
              <div className="flex flex-col gap-6">
                {reviews.map((r) => (
                  <article
                    key={r.id}
                    className="rounded-2xl bg-white p-7 shadow-sm shadow-brown/5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-heading text-xl text-brown">{r.name}</p>
                      <div className="flex gap-0.5" aria-label={`${r.rating} no 5`}>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <Star
                            key={n}
                            size={16}
                            className={n <= r.rating ? "fill-gold text-gold" : "text-gold/30"}
                          />
                        ))}
                      </div>
                    </div>
                    {r.procedure && (
                      <p className="mt-1 font-body text-xs uppercase tracking-wider text-gold">
                        {r.procedure}
                      </p>
                    )}
                    <p className="mt-4 whitespace-pre-line font-body text-sm leading-relaxed text-dark/75">
                      {r.text}
                    </p>
                    <p className="mt-4 font-body text-xs text-dark/45">
                      {formatDate(r.created_at)}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>

          <aside className="md:col-span-1">
            <div className="md:sticky md:top-32">
              <h2 className="mb-6 font-heading text-2xl text-brown">
                Uzrakstiet atsauksmi
              </h2>
              <ReviewForm procedures={procedures} />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
