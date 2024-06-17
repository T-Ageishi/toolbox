import { CardProps } from '@/app/_ui/card/card.types';
import style from './card.module.css';
import { oswald } from '@/app/_ui/fonts/fonts';

export default function Card ({headline, subhead, supportingText, variant = 'elevated'}: CardProps) {
  return (
    <div className={`${style['container']} ${style[variant]}`}>
      <h3
        className={`${style['headline']} ${oswald.className}`}
        style={{fontWeight: 500}}
      >
        {headline}
      </h3>
      <h4 className={style['subhead']}>{subhead}</h4>
      <p className={style['supportingText']}>{supportingText}</p>
    </div>
  );
}