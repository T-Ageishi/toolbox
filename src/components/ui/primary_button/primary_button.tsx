import styles from './primary_button.module.css';
import {PrimaryButtonProps} from './types';
import React from "react";
import {mergeClassNames} from "@/components/utils/merge_class_names";

const defaultClassNames = ['primary-button'].map(cn => styles[cn]);

export default function PrimaryButton({children, size, className, ...remaining}: PrimaryButtonProps) {
	const additionalClassNames = [];
	if (size) additionalClassNames.push(styles[size]);
	if (className) additionalClassNames.push(className);

	const classNames = mergeClassNames([...defaultClassNames, ...additionalClassNames]);

	return (
		<button className={classNames} {...remaining}>
			{children}
		</button>
	);
}