import clsx from "clsx";
import {ClassValue} from 'clsx';

export function mergeClassNames(classValue: ClassValue) {
	return clsx(classValue);
}