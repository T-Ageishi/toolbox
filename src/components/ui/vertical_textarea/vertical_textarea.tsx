import styles from './vertical_textarea.module.css';
import React from 'react';
import {TextareaProps} from '@/components/utils/types/html_props';
import {mergeClassNames} from "@/components/utils/merge_class_names";

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