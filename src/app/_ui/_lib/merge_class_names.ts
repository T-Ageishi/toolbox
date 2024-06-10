import clsx, { ClassValue } from 'clsx';

/**
 * クラス名をマージ
 */
export function mergeClassNames(classValue: ClassValue) {
  return clsx(classValue);
}