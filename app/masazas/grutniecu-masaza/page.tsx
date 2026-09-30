import type { Metadata } from "next";
import GrutniecuMasaza from "@/components/massages/GrutniecuMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("grutniecu-masaza")!;

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
  return <GrutniecuMasaza />;
}
