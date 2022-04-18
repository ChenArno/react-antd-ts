/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-18 17:04:18
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-18 17:05:49
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;