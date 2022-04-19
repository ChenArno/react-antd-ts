/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-19 14:07:02
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-19 14:07:02
 */
export const PROGRESS = "info/PROGRESS";

export function setProgress(value: boolean) {
	return { type: PROGRESS, value };
}