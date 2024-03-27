import WithNavigation from "./../../../components/ui/WithNavigation/WithNavigation";
import {MENU_ID_BASE64} from "@/components/ui/WithNavigation/data";
import styles from './page.module.css';
import VerticalTextarea from "@/components/ui/VerticalTextarea/VerticalTextarea";


/**
 * base64
 */
export default function Base64() {
	return (
		<WithNavigation activeMenuId={MENU_ID_BASE64}>
			<div className={styles['content-container']}>
				<textarea name={'f_source'} id={'f_source'} className={styles['f_source']}></textarea>
				<div style={{width: '64px', height: '64px'}}>
					<img src={'/triangle-down-outline.svg'} alt={'sample'}/>
				</div>
				<VerticalTextarea></VerticalTextarea>
				{/*<textarea name={'f_result'} id={'f_result'} className={styles['f_result']}></textarea>*/}
			</div>
		</WithNavigation>
	);
}
