import type { Metadata } from "next";
import RelaksejosaArZeltu from "@/components/massages/RelaksejosaArZeltu";
import { getMassageBySlug } from "@/data/massages";

const massage = getMassageBySlug("relaksejosa-ar-zeltu")!;

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
  return <RelaksejosaArZeltu />;
}
