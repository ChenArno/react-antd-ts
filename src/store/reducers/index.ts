/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-18 17:05:22
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-19 14:11:48
 */
import { combineReducers, Reducer } from 'redux';
import info from './info';

const reducers: Reducer = combineReducers({ info });
export default reducers;