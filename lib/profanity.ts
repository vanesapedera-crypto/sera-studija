// Vienkāršs rupjību filtrs. Sarakstu var papildināt.
const BAD_WORDS = [
  // LV
  "pizd", "pidar", "pidor", "sūdi", "sudi", "mauka", "dirs", "dirsa", "idiot", "debil", "kretīn", "kretin", "nahuj", "nahui", "bļaģ", "blad", "blja",
  // RU
  "хуй", "хуе", "пизд", "бля", "ебат", "ебан", "сука", "мудак", "пидор", "говно",
  // EN
  "fuck", "shit", "bitch", "cunt", "asshole", "dick",
];

export function containsProfanity(text: string): boolean {
  const t = text.toLowerCase();
  return BAD_WORDS.some((w) => t.includes(w));
}

export function looksLikeSpam(text: string): boolean {
  const links = (text.match(/https?:\/\/|www\.|\.(com|ru|net|xyz|top)\b/gi) || []).length;
  return links > 0;
}
