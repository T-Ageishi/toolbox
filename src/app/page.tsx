import WithNavigation from "@/components/ui/with_navigation/with_navigation";
import {MENU_ID_HOME} from "@/components/ui/with_navigation/data";

export default function Home() {
	return (
		<WithNavigation activeMenuId={MENU_ID_HOME}>{""}</WithNavigation>
	);
}
