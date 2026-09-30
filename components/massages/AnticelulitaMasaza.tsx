import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function AnticelulitaMasaza() {
  const massage = getMassageBySlug("anticelulita-masaza")!;
  return <MassageTemplate massage={massage} />;
}
