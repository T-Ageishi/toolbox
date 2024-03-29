import WithNavigation from "@/components/ui/with_navigation/with_navigation"
import {MENU_ID_DEVELOPMENT} from "@/components/ui/with_navigation/data";

/**
 * 開発
 */
export default function Development() {
	return (
		<WithNavigation activeMenuId={MENU_ID_DEVELOPMENT}>{""}</WithNavigation>
	);
}
