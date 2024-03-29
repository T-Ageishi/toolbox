import PullDown from "@/components/ui/pull_down/pull_down";
import {OptionProps, SelectProps} from "@/components/utils/types/html_props";
import styles from './base64.module.css';
import {lang} from "@/components/lang/lang";

const convTypeLabel = lang('0001');//変換方式
const convTypeSelectProps: SelectProps = {id: 'f_convert_type', name: 'f_convert_type'};
const convTypeOptionProps: OptionProps[] = [
	{label: lang('0002'), value: '1'},//エンコード
	{label: lang('0003'), value: '2'},//デコード
];

const charsetLabel = lang('0005');//変換前後の文字コード
const charsetSelectProps = {id: 'f_charset', name: 'f_charset'};
const charsetOptionProps: OptionProps[] = [
	{label: lang('0004'), value: '1'},//変換しない
	{label: lang('0006'), value: '2'},//UTF-8
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
