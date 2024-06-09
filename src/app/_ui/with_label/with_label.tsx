import { WithLabelProps } from '@/app/_ui/with_label/with_label.types';


/**
 * ラベルを付ける
 */
export default function WithLabel({
  label, htmlFor, children,
}: WithLabelProps) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </>
  );
}