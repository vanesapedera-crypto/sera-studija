import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { insertReview } from "@/lib/reviews";
import { containsProfanity, looksLikeSpam } from "@/lib/profanity";

// Vienkāršs ierobežojums: max 3 atsauksmes stundā no vienas IP adreses.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 3;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Nederīgs pieprasījums." }, { status: 400 });
  }

  // Slēptais lauks — cilvēki to neredz, roboti aizpilda.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const text = String(body.text ?? "").trim();
  const procedure = String(body.procedure ?? "").trim() || null;
  const rating = Number(body.rating);

  if (name.length < 2 || name.length > 60)
    return NextResponse.json({ error: "Lūdzu, ievadiet vārdu (2–60 simboli)." }, { status: 400 });
  if (text.length < 10 || text.length > 1000)
    return NextResponse.json({ error: "Atsauksmei jābūt 10–1000 simbolu garai." }, { status: 400 });
  if (!Number.isInteger(rating) || rating < 1 || rating > 5)
    return NextResponse.json({ error: "Lūdzu, izvēlieties vērtējumu." }, { status: 400 });
  if (procedure && procedure.length > 80)
    return NextResponse.json({ error: "Nederīga procedūra." }, { status: 400 });

  if (containsProfanity(`${name} ${text}`))
    return NextResponse.json({ error: "Lūdzu, pārrakstiet atsauksmi bez nepieklājīgiem vārdiem." }, { status: 400 });
  if (looksLikeSpam(`${name} ${text}`))
    return NextResponse.json({ error: "Atsauksmē nedrīkst būt saites." }, { status: 400 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip))
    return NextResponse.json({ error: "Pārāk daudz atsauksmju. Mēģiniet vēlāk." }, { status: 429 });

  const ok = await insertReview({ name, rating, procedure, text });
  if (!ok)
    return NextResponse.json({ error: "Neizdevās saglabāt. Mēģiniet vēlreiz." }, { status: 500 });

  revalidatePath("/atsauksmes");
  return NextResponse.json({ ok: true });
}
