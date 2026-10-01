import type { Metadata } from "next";
import MassageTemplate from "@/components/MassageTemplate";
import { headSpa } from "@/data/headSpa";

export const metadata: Metadata = {
  title: headSpa.seoTitle,
  description: headSpa.seoDescription,
  openGraph: {
    title: headSpa.seoTitle,
    description: headSpa.seoDescription,
    images: [{ url: headSpa.image }],
  },
};

export default function Page() {
  return <MassageTemplate massage={headSpa} standalone />;
}
