import {Setting} from "./types";

//@@todo idの取り扱いをなんとかしたい
/**
 * ナビゲーションのデータ
 */
export const navigationData: Setting[] = [
	{id: 1, label: 'ホーム', icon: 'Home', path: '/', children: []},
	{
		id: 2, label: '開発', icon: 'Code', path: '/development', children: [
			{id: 3, label: 'base64 encode/decode', icon: '', path: '/development/base64', children: []},
			{id: 4, label: 'PHP serialize/unserialize', icon: '', path: '/development/serialize', children: []},
		]
	},
];

export const MENU_ID_HOME: number = 1;
export const MENU_ID_DEVELOPMENT: number = 2;
export const MENU_ID_BASE64: number = 3;
export const MENU_ID_SERIALIZE: number = 4;