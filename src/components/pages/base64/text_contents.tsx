import {TextareaProps} from "@/components/utils/types/html_props";
import styles from './base64.module.css';
import VerticalTextarea from "@/components/ui/vertical_textarea/vertical_textarea";
import Image from "next/image";
import React, {ChangeEventHandler, useState} from "react";

const minRow: number = 8;
const sourceTextareaPropsBase: TextareaProps = {
	className: styles['f-source'],
	id: 'f-source',
	name: 'f-source',
	rows: minRow,
};
const resultTextareaPropsBase: TextareaProps = {
	className: styles['f-result'],
	id: 'f-result',
	name: 'f-result',
	rows: minRow,
	readOnly: true,
};

/**
 * テキストエリア部分のコンテンツ
 */
export default function TextContents() {
	const [sourceInput, setSourceInput] = useState<string>('');
	const handleSourceInput: ChangeEventHandler<HTMLTextAreaElement> = e => setSourceInput(e.target.value);

	const sourceTextareaProps: TextareaProps = {
		...sourceTextareaPropsBase,
		onChange: handleSourceInput,
		value: sourceInput
	};
	const resultTextareaProps: TextareaProps = {...resultTextareaPropsBase};

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