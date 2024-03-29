import PrimaryButton from "@/components/ui/primary_button/primary_button";
import {ButtonProps} from "@/components/utils/types/html_props";
import {lang} from "@/components/lang/lang";

export default function ExecButton({onClick}: ButtonProps) {
	return (
		<PrimaryButton size={'l'} onClick={onClick}>
			{
				lang('0007')//変換
			}
		</PrimaryButton>
	);
}