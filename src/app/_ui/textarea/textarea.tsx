import { TextareaProps } from '@/app/_ui/textarea/textarea.types';
import styles from '@/app/_ui/textarea/textarea.module.css';
import { mergeClassNames } from '@/app/_ui/_lib/merge_class_names';
import { ChangeEvent } from 'react';

export default function Textarea({
  resize = 'vertical', value = '', rows = 3, name,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      className={mergeClassNames([styles[`resize-${resize}`]])}
      defaultValue={value}
      rows={rows}
      onChange={autoResize}
    ></textarea>
  );
}

function autoResize(ev: ChangeEvent<HTMLTextAreaElement>) {
  ev.currentTarget.style.height = 'auto';
  ev.currentTarget.style.height = `${ev.currentTarget.scrollHeight}px`;
}