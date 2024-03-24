import WithNavigation from "./../../components/ui/WithNavigation/WithNavigation"
import {MENU_ID_DEVELOPMENT} from "./../../components/ui/WithNavigation/data";

export default function Home() {
	return (
		<WithNavigation activeMenuId={MENU_ID_DEVELOPMENT}>{""}</WithNavigation>
	);
}
