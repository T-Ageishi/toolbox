import PullDown from "@/components/ui/pull_down/pull_down";
import {OptionProps, SelectProps} from "@/components/utils/types/html_props";
import styles from './base64.module.css';

const convTypeLabel = '変換方式';
const convTypeSelectProps: SelectProps = {id: 'f_convert_type', name: 'f_convert_type'};
const convTypeOptionProps: OptionProps[] = [
	{label: 'エンコード', value: '1'}, {label: 'デコード', value: '2'},
];

const charsetLabel = '変換前後の文字コード';
const charsetSelectProps = {id: 'f_charset', name: 'f_charset'};
const charsetOptionProps: OptionProps[] = [
	{label: '変換しない', value: '1'}, {label: 'UTF-8', value: '2'},
];

/**
 * 画面上部の条件系項目
 */
export default function Conditions() {
	return (
		<>
			<div className={styles['condition-container']}>
				<PullDown
					label={convTypeLabel}
					selectProps={convTypeSelectProps}
					optionPropsAry={convTypeOptionProps}
				/>
				<PullDown
					label={charsetLabel}
					selectProps={charsetSelectProps}
					optionPropsAry={charsetOptionProps}
				/>
			</div>
		</>
	);
}
