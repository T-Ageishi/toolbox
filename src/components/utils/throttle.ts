/**
 * <pre>
 * throttle
 * 一定の間隔で処理を実行する。
 * 呼び出された関数の実行を一定時間あたり一回に間引く。
 * https://www.webdesignleaves.com/pr/jquery/debounce-and-throttle.html
 * </pre>
 */
export function throttle(fn: Function, wait: number = 100): Function {
	let isWaiting = false;

	return function (...args: unknown[]) {
		if (isWaiting) return;

		isWaiting = true;
		fn.call(null, ...args);

		setTimeout(() => isWaiting = false, wait);
	}
}