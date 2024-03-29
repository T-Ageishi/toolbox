'use client';
import WithNavigation from "@/components/ui/with_navigation/with_navigation";
import {MENU_ID_BASE64} from "@/components/ui/with_navigation/data";
import styles from './page.module.css';
import TextContents from "@/components/pages/base64/text_contents";
import Conditions from "@/components/pages/base64/conditions";
import ExecButton from "@/components/pages/base64/exec_button";
import {ChangeEventHandler, useState} from "react";
import {base64Decode, base64Encode} from "@/components/utils/base64";


/**
 * base64
 */
export default function Base64() {
	const [convType, setConvType] = useState<string>('1');
	const [charset, setCharset] = useState<string>('1');
	const [sourceValue, setSourceValue] = useState<string>('');
	const [resultValue, setResultValue] = useState<string>('');

	const handleConvertTypeChange: ChangeEventHandler<HTMLSelectElement> = e => {
		setSourceValue('');
		setConvType(e.target.value);
	};
	const handleCharsetChange: ChangeEventHandler<HTMLSelectElement> = e => setCharset(e.target.value);
	const handleSourceInput: ChangeEventHandler<HTMLTextAreaElement> = e => setSourceValue(e.target.value);

	//base64 変換入口
	const execBase64 = () => {
		if (convType === '1') setResultValue(base64Encode(sourceValue));
		if (convType === '2') setResultValue(base64Decode(sourceValue));
	};

	return (
		<WithNavigation activeMenuId={MENU_ID_BASE64}>
			<div className={styles['content-container']}>
				<Conditions
					convType={convType}
					handleConvertTypeChange={handleConvertTypeChange}
					charset={charset}
					handleCharsetChange={handleCharsetChange}
				/>
				<TextContents
					sourceValue={sourceValue}
					handleSourceInput={handleSourceInput}
					resultValue={resultValue}
				/>
				<div className={styles['exec-btn-container']}>
					<ExecButton onClick={execBase64}/>
				</div>
			</div>
		</WithNavigation>
	);
}
