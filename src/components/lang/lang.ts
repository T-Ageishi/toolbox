/**
 * 言語データ本体
 */
const langData: {[key: string] : string;} = {
	'0001': '変換方式',
	'0002': 'エンコード',
	'0003': 'デコード',
	'0004': '変換しない',
	'0005': '変換前後の文字コード',
	'0006': 'UTF-8',
	'0007': '変換',
	'0008': 'ホーム',
	'0009': '開発',
	'0010' : 'base64 encode/decode',
	'0011': 'PHP serialize/unserialize',
};

/**
 * 言語データ取得
 */
export function lang(key: string): string {
	return langData[key] || '';
}