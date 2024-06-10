import { Setting } from '@/app/_types';
import { lang } from '@/lib/lang/lang';

export const MENU_ID_HOME: number = 1;
export const MENU_ID_DEVELOPMENT: number = 2;
export const MENU_ID_BASE64: number = 3;
export const MENU_ID_SERIALIZE: number = 4;
export const MENU_ID_WORK: number = 5;
export const MENU_ID_TEMPLATE_MAKER: number = 6;

/**
 * ナビゲーションのデータ
 */
export const navigationData: Setting[] = [
  {id: MENU_ID_HOME, label: lang('0008'), icon: 'Home', path: '/', children: []},//ホーム
  {
    id: MENU_ID_DEVELOPMENT, label: lang('0009'), icon: 'Code', path: '/development', children: [//開発
      {id: MENU_ID_BASE64, label: lang('0010'), path: '/development/base64', children: []},//base64 encode/decode
      {id: MENU_ID_SERIALIZE, label: lang('0011'), path: '/development/serialize', children: []},//PHP serialize/unserialize
    ],
  },
  {
    id: MENU_ID_WORK, label: lang('0013'), icon: 'Work', path: '/work', children: [//一般業務
      {id: MENU_ID_TEMPLATE_MAKER, label: lang('0014'), path: '/work/template_maker', children: []},//定型文生成
    ],
  },
];