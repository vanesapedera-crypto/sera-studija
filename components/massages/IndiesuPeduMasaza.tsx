import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function IndiesuPeduMasaza() {
  const massage = getMassageBySlug("indiesu-pedu-masaza")!;
  return <MassageTemplate massage={massage} />;
}
