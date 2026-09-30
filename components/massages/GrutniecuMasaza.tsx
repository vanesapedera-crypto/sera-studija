import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function GrutniecuMasaza() {
  const massage = getMassageBySlug("grutniecu-masaza")!;
  return <MassageTemplate massage={massage} />;
}
