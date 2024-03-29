import {Setting} from "./types";
import {lang} from "@/components/lang/lang";

/**
 * ナビゲーションのデータ
 */
export const navigationData: Setting[] = [
	//@@todo 別の場所に定義する
	{id: 1, label: lang('0008'), icon: 'Home', path: '/', children: []},//ホーム
	{
		id: 2, label: lang('0009'), icon: 'Code', path: '/development', children: [//開発
			{id: 3, label: lang('0010'), icon: '', path: '/development/base64', children: []},//base64 encode/decode
			{id: 4, label: lang('0011'), icon: '', path: '/development/serialize', children: []},//PHP serialize/unserialize
		]
	},
];

export const MENU_ID_HOME: number = 1;
export const MENU_ID_DEVELOPMENT: number = 2;
export const MENU_ID_BASE64: number = 3;
export const MENU_ID_SERIALIZE: number = 4;