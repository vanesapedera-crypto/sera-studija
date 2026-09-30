import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function KarstoAkmenuMasaza() {
  const massage = getMassageBySlug("karsto-akmenu-masaza")!;
  return <MassageTemplate massage={massage} />;
}
