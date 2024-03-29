import WithNavigation from "@/components/ui/with_navigation/with_navigation";
import {MENU_ID_SERIALIZE} from "@/components/ui/with_navigation/data";

export default function Serialize() {
	return (
		<WithNavigation activeMenuId={MENU_ID_SERIALIZE}>{""}</WithNavigation>
	);
}
