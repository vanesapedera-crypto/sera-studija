import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function KlasiskaKermenaMasaza() {
  const massage = getMassageBySlug("klasiska-kermena-masaza")!;
  return <MassageTemplate massage={massage} />;
}
