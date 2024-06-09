import React from 'react';
import Button from '@/app/_ui/button/button';
import { lang } from '@/lib/lang/lang';
import { ButtonProps } from '@/app/_ui/button/button.types';

/**
 * 変換ボタン
 */
export default function ExecButton ({onClick}: ButtonProps) {
  return <Button label={lang('0007')} onClick={onClick}/>;
}