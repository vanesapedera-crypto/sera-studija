import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function SokoladesMasaza() {
  const massage = getMassageBySlug("sokolades-masaza")!;
  return <MassageTemplate massage={massage} />;
}
