import PrimaryButton from "@/components/ui/primary_button/primary_button";
import {lang} from "@/components/lang/lang";

export default function ExecButton() {
	return (
		<PrimaryButton size={'large'}>
			{
				lang('0007')//変換
			}
		</PrimaryButton>
	);
}