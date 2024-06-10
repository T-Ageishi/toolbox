import {Setting} from '@/app/_types';

export function getLevel(setting: Setting){
	//urlがlocalhost:8000/とかだと0になってしまうのでケア
	return Math.max(setting.path.split('/').filter(segment => segment !== '').length, 1);
}