import PrimaryButton from "@/components/ui/primary_button/primary_button";
import {ButtonProps} from "@/components/utils/types/html_props";
import {lang} from "@/components/lang/lang";
import WithRippleEffect from "@/components/ui/with_ripple/with_ripple_effect";
import React from "react";
import {ExecButtonProps} from "@/components/pages/base64/types";

/**
 * 変換ボタン
 */
export default function ExecButton({onClick}: ButtonProps) {
	//@@todo ripple effectないほうがいいかも
	return WithRippleEffect({WrappedComponent})({onClick});
}

const WrappedComponent: React.FC<ExecButtonProps> = ({
	handleRipple, onClick, ...remains
}) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		handleRipple(e);
		if (onClick) onClick(e);
	};
	return (
		<PrimaryButton size={'l'} onClick={handleClick} {...remains}>
			{
				lang('0007')//変換
			}
		</PrimaryButton>
	);
};