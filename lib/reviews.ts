// Atsauksmes glabājas Supabase tabulā "reviews" (skat. supabase/reviews.sql).
// Vajadzīgie vides mainīgie (Vercel → Settings → Environment Variables):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
// Atslēga tiek izmantota tikai serverī — pārlūkā tā nenonāk.

export interface Review {
  id: number;
  name: string;
  rating: number;
  procedure: string | null;
  text: string;
  created_at: string;
}

function config() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return {
    url: `${url.replace(/\/$/, "")}/rest/v1/reviews`,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };
}

export async function getReviews(): Promise<Review[]> {
  const c = config();
  if (!c) return [];
  try {
    const res = await fetch(
      `${c.url}?select=id,name,rating,procedure,text,created_at&order=created_at.desc&limit=200`,
      { headers: c.headers, cache: "no-store" },
    );
    if (!res.ok) return [];
    return (await res.json()) as Review[];
  } catch {
    return [];
  }
}

export async function insertReview(
  review: Pick<Review, "name" | "rating" | "procedure" | "text">,
): Promise<boolean> {
  const c = config();
  if (!c) return false;
  const res = await fetch(c.url, {
    method: "POST",
    headers: { ...c.headers, Prefer: "return=minimal" },
    body: JSON.stringify(review),
  });
  return res.ok;
}
