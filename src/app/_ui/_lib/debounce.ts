/**
 * <pre>
 * debounce
 * 一定時間後に処理を実行する。
 * 待機中に再度同じ処理が呼ばれた場合はタイマーをリセット。
 * https://www.webdesignleaves.com/pr/jquery/debounce-and-throttle.html
 * </pre>
 */
export function debounce(fn: Function, wait: number = 100): Function {
  let timerId: number | null;

  return function (...args: unknown[]) {
    if (timerId) window.clearTimeout(timerId);
    timerId = window.setTimeout(() => fn.call(null, ...args), wait);
  };
}