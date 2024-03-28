import styles from './VerticalTextarea.module.css';
import React from 'react';
import {TextareaProps} from './types';
import {mergeClassNames} from "@/components/utils/mergeClassNames";

const defaultClassNames: string[] = ['resize-vertical'].map(cn => styles[cn]);

/**
 * 縦方向にしかリサイズできないテキストエリア
 */
export default function VerticalTextarea({className, ...remaining}: TextareaProps) {
	const classNames = mergeClassNames([...defaultClassNames, className]);

	return (
		<>
			<textarea className={classNames} {...remaining}></textarea>
		</>
	);
}