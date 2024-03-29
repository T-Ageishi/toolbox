'use client';
import WithNavigation from "@/components/ui/with_navigation/with_navigation";
import {MENU_ID_BASE64} from "@/components/ui/with_navigation/data";
import styles from './page.module.css';
import TextContents from "@/components/pages/base64/text_contents";
import Conditions from "@/components/pages/base64/conditions";
import ExecButton from "@/components/pages/base64/exec_button";
import React, {useState} from "react";


/**
 * base64
 * cumulative layout shift
 */
export default function Base64() {
	const [resultValue, setResultValue] = useState<string>('');
	const handleResultValue = (text: string) => setResultValue(text);

	return (
		<WithNavigation activeMenuId={MENU_ID_BASE64}>
			<div className={styles['content-container']}>
				<Conditions/>
				<TextContents/>
				<div className={styles['exec-btn-container']}>
					<ExecButton/>
				</div>
			</div>
		</WithNavigation>
	);
}
