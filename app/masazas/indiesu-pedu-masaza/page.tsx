import type { Metadata } from "next";
import IndiesuPeduMasaza from "@/components/massages/IndiesuPeduMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("indiesu-pedu-masaza")!;

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
  return <IndiesuPeduMasaza />;
}
