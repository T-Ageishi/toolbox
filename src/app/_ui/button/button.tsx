import { ButtonProps } from '@/app/_ui/button/button.types';
import styles from '@/app/_ui/button/button.module.css';
import { mergeClassNames } from '@/app/_ui/_lib/merge_class_names';

export default function Button ({
    variant = 'filled',
    size = 'medium',
    label,
    onClick = () => {},
  }: ButtonProps,
) {
  const classNames = mergeClassNames([
    styles[`button-${variant}`], styles[`button-${size}`],
  ]);

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {label}
    </button>
  );
}