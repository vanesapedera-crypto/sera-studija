import type { Metadata } from "next";
import SokoladesMasaza from "@/components/massages/SokoladesMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("sokolades-masaza")!;

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
  return <SokoladesMasaza />;
}
