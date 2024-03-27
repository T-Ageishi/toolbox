/**
 * debounce
 * 一定時間後に処理を実行する。連続して呼ばれた分は無視される。
 * https://www.webdesignleaves.com/pr/jquery/debounce-and-throttle.html
 */
export function debounce(fn: Function, wait: number = 100): Function {
	let timerId: number | null;

	return function (...args: unknown[]) {
		if (timerId) window.clearTimeout(timerId);
		timerId = window.setTimeout(() => fn.call(null, ...args), wait);
	};
}