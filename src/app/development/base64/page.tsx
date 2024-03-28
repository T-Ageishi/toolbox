import WithNavigation from "./../../../components/ui/WithNavigation/WithNavigation";
import {MENU_ID_BASE64} from "@/components/ui/WithNavigation/data";
import styles from './page.module.css';
import TextContents from "@/components/pages/base64/TextContents";
import Conditions from "@/components/pages/base64/Conditions";
import ExecButton from "@/components/pages/base64/ExecButton";


/**
 * base64
 * cumulative layout shift
 */
export default function Base64() {
	return (
		<WithNavigation activeMenuId={MENU_ID_BASE64}>
			<div className={styles['content-container']}>
				<Conditions/>
				<TextContents/>
				<div className={styles['exec-btn-container']}>
					<ExecButton/>
				</div>
			</div>
		</WithNavigation>
	);
}
