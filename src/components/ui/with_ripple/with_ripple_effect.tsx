import styles from './with_ripple.module.css';
import React, {ComponentType, FC} from "react";
import {ButtonProps} from "@/components/utils/types/html_props";
import {mergeClassNames} from "@/components/utils/merge_class_names";

//@@todo リファクタリングしたい
interface WithRippleEffectProps extends ButtonProps {
	handleRipple: React.MouseEventHandler;
}

/**
 * 引数で受け取ったコンポーネントにripple-effectを付ける
 */
export default function WithRippleEffect<T extends WithRippleEffectProps>({WrappedComponent}: {
	WrappedComponent: ComponentType<T>
}) {
	//Omit<T, Keys>は、オブジェクトの型TからKeysで指定したプロパティを除いたobject型を返すユーティリティ型
	const WithRippleEffectComponent: FC<Omit<T, 'handleRipple'>> = (props) => {
		const {className, ...remains} = props;
		let cn = styles['ripple-source'];
		if (className) {
			cn = mergeClassNames([cn, className]);
		}
		return <WrappedComponent {...remains as T} className={cn} handleRipple={handleRipple}/>;
	}

	return WithRippleEffectComponent;
}


/**
 * ripple effect
 */
function handleRipple(e: React.MouseEvent<HTMLButtonElement>) {
	if (e.currentTarget === null) return;

	const {offsetX, offsetY} = e.nativeEvent;

	//ripple effectを再生する箱
	let effectContainer = e.currentTarget.querySelector<HTMLElement>(`.${styles['ripple-effect-container']}`);
	if (effectContainer === null) {
		effectContainer = document.createElement('div');
		effectContainer.classList.add(styles['ripple-effect-container']);
		e.currentTarget.append(effectContainer);
	}

	//ripple effect
	let effect = effectContainer.querySelector<HTMLElement>(`.${styles['ripple-effect']}`);
	if (effect === null) {
		effect = document.createElement('span');
		effect.classList.add(styles['ripple-effect']);
		effectContainer.append(effect);
	}

	const rect = effectContainer.getBoundingClientRect();
	effectContainer.style.left = `${offsetX - rect.width / 2}px`;
	effectContainer.style.top = `${offsetY - rect.height / 2}px`;
	effect.classList.add(styles['active']);

	const handleAnimationEnd = () => {
		effect.classList.remove(styles['active']);
		effect.removeEventListener('animationend', handleAnimationEnd);
	};
	effect.addEventListener('animationend', handleAnimationEnd);
}