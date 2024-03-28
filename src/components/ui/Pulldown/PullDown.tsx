import styles from './PullDown.module.css';
import {LabelProps, OptionProps, SelectProps} from "@/components/ui/Pulldown/types";
import React from "react";


/**
 * プルダウン
 */
export default function PullDown({
	label,
	labelProps = {},
	selectProps,
	optionPropsAry
}: {
	label: string;
	selectProps: SelectProps;
	optionPropsAry: OptionProps[];
	labelProps?: LabelProps;
}) {
	const selectId = selectProps.id || crypto.randomUUID();
	return (
		<div className={styles['pull-down-container']}>
			<label htmlFor={selectId} {...labelProps}>{label}</label>
			<select id={selectId}>
				{
					optionPropsAry.filter(
						oProps => oProps.value && oProps.label
					).map(
						oProps => {
							const {value, label, ...remaining} = oProps;
							return <option key={value as React.Key} {...remaining}>{label}</option>;
						}
					)
				}
			</select>
		</div>
	);
}