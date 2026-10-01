"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";

export default function ReviewForm({ procedures }: { procedures: string[] }) {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!rating) {
      setError("Lūdzu, izvēlieties vērtējumu.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/atsauksmes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, rating }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error || "Neizdevās nosūtīt. Mēģiniet vēlreiz.");
        setStatus("idle");
        return;
      }
      form.reset();
      setRating(0);
      setStatus("done");
      router.refresh();
    } catch {
      setError("Neizdevās nosūtīt. Mēģiniet vēlreiz.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-beige/30 p-8 text-center">
        <p className="font-heading text-2xl text-brown">Paldies par atsauksmi!</p>
        <p className="mt-3 font-body text-sm text-dark/70">
          Jūsu atsauksme jau redzama lapā.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-body text-sm text-gold underline-offset-4 hover:underline"
        >
          Rakstīt vēl vienu
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-beige bg-white px-4 py-3 font-body text-sm text-dark outline-none transition focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-2xl bg-beige/30 p-8">
      <div>
        <p className="mb-2 font-body text-xs uppercase tracking-wider text-dark/50">
          Vērtējums
        </p>
        <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} no 5`}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
            >
              <Star
                size={28}
                strokeWidth={1.5}
                className={`transition-colors ${
                  n <= (hover || rating) ? "fill-gold text-gold" : "text-gold/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-body text-xs uppercase tracking-wider text-dark/50">Vārds</span>
        <input name="name" required minLength={2} maxLength={60} className={inputClass} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-body text-xs uppercase tracking-wider text-dark/50">
          Procedūra (neobligāti)
        </span>
        <select name="procedure" defaultValue="" className={inputClass}>
          <option value="">— Izvēlieties —</option>
          {procedures.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-body text-xs uppercase tracking-wider text-dark/50">Atsauksme</span>
        <textarea
          name="text"
          required
          minLength={10}
          maxLength={1000}
          rows={5}
          className={inputClass}
        />
      </label>

      {/* Slēpts lauks pret robotiem */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {error && <p className="font-body text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 font-body text-sm tracking-wide text-background transition-all duration-300 hover:bg-brown disabled:opacity-60"
      >
        {status === "sending" ? "Sūta..." : "Nosūtīt atsauksmi"}
      </button>
    </form>
  );
}
