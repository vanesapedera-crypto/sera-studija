import type { Metadata } from "next";
import MedusMasaza from "@/components/massages/MedusMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("medus-masaza")!;

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
  return <MedusMasaza />;
}
