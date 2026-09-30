import type { Metadata } from "next";
import AnticelulitaMasaza from "@/components/massages/AnticelulitaMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("anticelulita-masaza")!;

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
  return <AnticelulitaMasaza />;
}
