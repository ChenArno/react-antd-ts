/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-19 14:07:51
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-19 14:31:18
 */
import { ActionStoreState } from '../connect';
import { PROGRESS } from '@/store/actions/info';

const initState = {
	progress: false,
}

export default function reducer(state = initState, action: ActionStoreState<any>) {
	switch (action.type) {
		case PROGRESS:
			return { ...state, progress: action.value };
		default:
			return state;
	}
}