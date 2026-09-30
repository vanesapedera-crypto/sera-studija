import type { Metadata } from "next";
import MugurasMasaza from "@/components/massages/MugurasMasaza";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("muguras-masaza")!;

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
  return <MugurasMasaza />;
}
