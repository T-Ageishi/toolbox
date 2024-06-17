/**
 * <pre>
 * Base64
 * MDNではunescapeとescapeを使う方法が提示されているが、
 * 両方の関数が非推奨となっているため使用しない。
 * </pre>
 * @see {@link https://developer.mozilla.org/ja/docs/Glossary/Base64} Base64
 */
export function base64Encode(source: string) {
	return window.btoa(toBinary(source));
}

export function base64Decode(source: string) {
	return fromBinary(window.atob(source));
}

/**
 * Unicode 文字列で、各 16 ビット単位を 1 バイトしか占有しない文字列に変換
 * @see {@link https://developer.mozilla.org/ja/docs/Web/API/btoa} btoa
 */
function toBinary(source: string) {
	const codeUnits = Uint16Array.from(
		{length: source.length},
		(element, index) => source.charCodeAt(index)
	);
	const charCodes = new Uint8Array(codeUnits.buffer);

	let result = '';
	charCodes.forEach(char => {
		result += String.fromCharCode(char);
	});
	return result;
}

/**
 * 逆変換
 * @see {@link https://developer.mozilla.org/ja/docs/Web/API/btoa} btoa
 */
function fromBinary(binary: string) {
	const bytes = Uint8Array.from(
		{length: binary.length},
		(element, index) => binary.charCodeAt(index)
	);
	const charCodes = new Uint16Array(bytes.buffer);

	let result = '';
	charCodes.forEach(char => {
		result += String.fromCharCode(char);
	});
	return result;
}
