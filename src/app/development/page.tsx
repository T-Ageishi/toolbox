import WithNavigation from "./../../components/ui/WithNavigation/WithNavigation"
import {MENU_ID_DEVELOPMENT} from "./../../components/ui/WithNavigation/data";

/**
 * 開発
 */
export default function Development() {
	return (
		<WithNavigation activeMenuId={MENU_ID_DEVELOPMENT}>{""}</WithNavigation>
	);
}
