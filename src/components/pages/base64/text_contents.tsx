import {TextareaProps} from "@/components/utils/types/html_props";
import styles from './base64.module.css';
import VerticalTextarea from "@/components/ui/vertical_textarea/vertical_textarea";
import Image from "next/image";
import React from "react";

const minRow: number = 8;
//変換前
const sourceDefaultProps: TextareaProps = {
	className: styles['f-source'],
	id: 'f-source',
	name: 'f-source',
	rows: minRow,
};
//変換後
const resultDefaultProps: TextareaProps = {
	className: styles['f-result'],
	id: 'f-result',
	name: 'f-result',
	rows: minRow,
	readOnly: true,
};

/**
 * テキストエリア部分のコンテンツ
 */
export default function TextContents({sourceProps, resultProps}: {
	sourceProps: TextareaProps;
	resultProps: TextareaProps;
}) {
	//変換前
	const sourceTextareaProps: TextareaProps = {...sourceDefaultProps, ...sourceProps};
	//変換後
	const resultTextareaProps: TextareaProps = {...resultDefaultProps, ...resultProps};

	return (
		<div>
			<VerticalTextarea {...sourceTextareaProps}/>
			<div className={styles['triangle-icon-line']}>
				<Image
					src='/triangle_down_outline.svg'
					width={64}
					height={64}
					alt={'sample'}
				/>
			</div>
			<VerticalTextarea {...resultTextareaProps}/>
		</div>
	);
}