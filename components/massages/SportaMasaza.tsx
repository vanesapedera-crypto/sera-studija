import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function SportaMasaza() {
  const massage = getMassageBySlug("sporta-masaza")!;
  return <MassageTemplate massage={massage} />;
}
