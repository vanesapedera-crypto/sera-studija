import MassageTemplate from "@/components/MassageTemplate";
import { getMassageBySlug } from "@/data/massages";

export default function RelaksejosaArZeltu() {
  const massage = getMassageBySlug("relaksejosa-ar-zeltu")!;
  return <MassageTemplate massage={massage} />;
}
