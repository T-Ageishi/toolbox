import {TextareaProps} from "@/components/ui/VerticalTextarea/types";
import styles from './base64.module.css';
import VerticalTextarea from "@/components/ui/VerticalTextarea/VerticalTextarea";
import Image from "next/image";

/**
 * テキストエリア部分のコンテンツ
 */
export default function TextContents() {
	const minRow: number = 8;
	const sourceTextareaProps: TextareaProps = {
		className: styles['f_source'],
		id: 'f_source',
		name: 'f_source',
		rows: minRow,
	};
	const resultTextareaProps: TextareaProps = {
		className: styles['f_result'],
		id: 'f_result',
		name: 'f_result',
		rows: minRow,
	};

	return (
		<div>
			<VerticalTextarea {...sourceTextareaProps}/>
			<div className={styles['triangle-icon-line']}>
				<Image
					src='/triangle-down-outline.svg'
					width={64}
					height={64}
					alt={'sample'}
				/>
			</div>
			<VerticalTextarea {...resultTextareaProps}/>
		</div>
	);
}