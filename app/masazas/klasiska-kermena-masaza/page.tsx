import type { Metadata } from "next";
import KlasiskaKermenaMasaza from "@/components/massages/KlasiskaKermenaMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("klasiska-kermena-masaza")!;

export const metadata: Metadata = {
  title: massage.seoTitle,
  description: massage.seoDescription,
  openGraph: {
    title: massage.seoTitle,
    description: massage.seoDescription,
    images: [{ url: massage.image }],
  },
};

export default function Page() {
  return <KlasiskaKermenaMasaza />;
}
