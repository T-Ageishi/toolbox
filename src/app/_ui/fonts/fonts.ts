import { Noto_Sans_JP, Oswald } from 'next/font/google';

/**
 * フォント定義ファイル
 */
export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '700'],
});

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500'],
});