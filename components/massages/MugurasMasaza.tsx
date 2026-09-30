import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function MugurasMasaza() {
  const massage = getMassageBySlug("muguras-masaza")!;
  return <MassageTemplate massage={massage} />;
}
