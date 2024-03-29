import PullDown from "@/components/ui/pull_down/pull_down";
import {OptionProps, SelectProps} from "@/components/utils/types/html_props";
import styles from './base64.module.css';
import {lang} from "@/components/lang/lang";
import {ChangeEventHandler} from "react";

const convTypeLabel = lang('0001');//変換方式
const convTypeSelectDefaultProps: SelectProps = {id: 'f-convert-type', name: 'f-convert-type'};
const convTypeOptionDefaultProps: OptionProps[] = [
	{label: lang('0002'), value: '1'},//エンコード
	{label: lang('0003'), value: '2'},//デコード
];

const charsetLabel = lang('0005');//変換前後の文字コード
const charsetSelectDefaultProps = {id: 'f-charset', name: 'f-charset'};
const charsetOptionDefaultProps: OptionProps[] = [
	{label: lang('0004'), value: '1'},//変換しない
	{label: lang('0006'), value: '2'},//UTF-8
];

/**
 * 画面上部の条件系項目
 */
export default function Conditions({
	convType, handleConvertTypeChange, charset, handleCharsetChange
}: {
	convType: string;
	handleConvertTypeChange: ChangeEventHandler<HTMLSelectElement>;
	charset: string;
	handleCharsetChange: ChangeEventHandler<HTMLSelectElement>;
}) {
	//変換方式選択プルダウン
	const convTypeSelectProps = {...convTypeSelectDefaultProps, onChange: handleConvertTypeChange, value: convType};
	const convTypeOptionProps = [...convTypeOptionDefaultProps];

	//変換前後の文字コード選択プルダウン
	const charsetSelectProps = {...charsetSelectDefaultProps, onChange: handleCharsetChange, value: charset};
	const charsetOptionProps = [...charsetOptionDefaultProps];

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
