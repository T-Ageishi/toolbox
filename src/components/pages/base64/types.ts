import {ButtonProps} from "@/components/utils/types/html_props";
import {MouseEventHandler} from "react";

/**
 * base64変換ボタンのprops
 * ripple effect使わないなら消す
 */
export interface ExecButtonProps extends ButtonProps {
	handleRipple: MouseEventHandler;
}