import { OptionProps, SelectProps } from '@/app/_ui/pulldown/pulldown.types';
import styles from '@/app/_ui/pulldown/pulldown.module.css';

export default function PullDown({
  selectProps, optionProperties,
}: {
  selectProps: SelectProps;
  optionProperties: OptionProps[];
}) {
  return (
    <div className={styles['pull-down-container']}>
      <select name={selectProps.name}>
        {
          optionProperties
            .filter(optionProps => optionProps.value && optionProps.label)
            .map(optionProps => (
              <option key={optionProps.label} value={optionProps.value}>{optionProps.label}</option>
            ))
        }
      </select>
    </div>
  );
}