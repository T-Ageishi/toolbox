import WithNavigation from "@/components/ui/with_navigation/with_navigation";
import {MENU_ID_WORK} from "@/components/ui/with_navigation/data";

export default function Work() {
  return (
    <WithNavigation activeMenuId={MENU_ID_WORK}>{""}</WithNavigation>
  );
}
