import type { Metadata } from "next";
import SportaMasaza from "@/components/massages/SportaMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("sporta-masaza")!;

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
  return <SportaMasaza />;
}
