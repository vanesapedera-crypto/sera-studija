import type { Metadata } from "next";
import KarstoAkmenuMasaza from "@/components/massages/KarstoAkmenuMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("karsto-akmenu-masaza")!;

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
  return <KarstoAkmenuMasaza />;
}
