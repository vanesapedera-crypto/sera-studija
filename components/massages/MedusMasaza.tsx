import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function MedusMasaza() {
  const massage = getMassageBySlug("medus-masaza")!;
  return <MassageTemplate massage={massage} />;
}
