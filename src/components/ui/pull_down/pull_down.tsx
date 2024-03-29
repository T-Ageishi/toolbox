import styles from './pull_down.module.css';
import {LabelProps, OptionProps, SelectProps} from "@/components/utils/types/html_props";
import React from "react";


/**
 * プルダウン
 */
export default function PullDown({
	label, labelProps = {}, selectProps, optionPropsAry
}: {
	label: string; selectProps: SelectProps; optionPropsAry: OptionProps[]; labelProps?: LabelProps;
}) {
	const selectId = selectProps.id || crypto.randomUUID();
	return (
		<div className={styles['pull-down-container']}>
			<label htmlFor={selectId} {...labelProps}>{label}</label>
			<select id={selectId} {...selectProps}>
				{
					optionPropsAry.filter(
						oProps => oProps.value && oProps.label
					).map(
						oProps => {
							const {value, label, ...remaining} = oProps;
							return <option key={value as React.Key} value={value} {...remaining}>{label}</option>;
						}
					)
				}
			</select>
		</div>
	);
}