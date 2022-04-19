/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-19 14:08:40
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-19 14:08:40
 */
export interface ActionStoreState<T> {
	type: string
	value?: T
}
