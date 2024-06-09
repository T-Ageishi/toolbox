import React from 'react';
import Textarea from '@/app/_ui/textarea/textarea';
import WithLabel from '@/app/_ui/with_label/with_label';
import Image from 'next/image';
import { TextareaProps } from '@/app/_ui/textarea/textarea.types';
import styles from './base64.module.css';
import { lang } from '@/lib/lang/lang';

//変換前
const sourceDefaultProps: TextareaProps = {
  id: 'f-source',
  name: 'f-source',
  className: styles['f-source'],
};
//変換後
const resultDefaultProps: TextareaProps = {
  id: 'f-result',
  name: 'f-result',
  className: styles['f-result'],
  readOnly: true,
};

/**
 * テキストエリア部分のコンテンツ
 */
export default function TextContents ({sourceProps, resultProps}: {
  sourceProps: TextareaProps;
  resultProps: TextareaProps;
}) {
  const sourceTextareaProps: TextareaProps = {...sourceDefaultProps, ...sourceProps};
  const resultTextareaProps: TextareaProps = {...resultDefaultProps, ...resultProps};

  return (
    <div>
      <WithLabel label={lang('0015')} htmlFor={'f-source'}>
        <Textarea {...sourceTextareaProps}/>
      </WithLabel>
      <div className={styles['triangle-icon-line']}>
        <Image
          src="/triangle_down_outline.svg"
          width={64}
          height={64}
          alt={'sample'}
        />
      </div>
      <WithLabel label={lang('0016')} htmlFor={'f-result'}>
        <Textarea {...resultTextareaProps}/>
      </WithLabel>
    </div>
  );
}