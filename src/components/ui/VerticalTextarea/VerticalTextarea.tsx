import styles from './VerticalTextarea.module.css';
import React from 'react';
import {TextareaProps} from './types';
import {mergeClassNames} from "@/components/utils/mergeClassNames";

const defaultClassNames: string[] = [
	'resize-vertical',
];

/**
 * 縦方向にしかリサイズできないテキストエリア
 */
export default function VerticalTextarea({className, ...remaining}: TextareaProps) {
	const baseClassNames = mergeClassNames([...defaultClassNames, className]);

	return (
		<>
			<textarea className={''}></textarea>
		</>
	);
}