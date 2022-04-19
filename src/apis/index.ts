/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-19 14:01:52
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-19 14:23:24
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import NProgress from 'nprogress';
import store from '@/store';
import { message } from 'antd';
import { setProgress } from '@/store/actions/info';

interface FetchConfig extends AxiosRequestConfig {
	isRefresh?: boolean;
	useToken?: boolean;
	upload?: boolean;
	permissions?: boolean;
	headers?: any;
}

interface FetchResponse extends AxiosResponse {
	msg?: string;
	code?: number;
}

NProgress.configure({ showSpinner: false });

const { REACT_APP_API } = process.env;

const instance = axios.create({
	baseURL: REACT_APP_API,
	timeout: 6e4,
	headers: {
		'content-type': 'application/json;charset=utf-8'
	}
});

instance.interceptors.request.use((config: FetchConfig) => {
	if (config.data instanceof FormData) {
		// Object.assign(config.headers, config.data.getHeaders());
	}

	const { useToken, isRefresh } = config;

	if (isRefresh) {
		NProgress.start();
		store.dispatch(setProgress(true));
	}
	return config;
});

instance.interceptors.response.use((response) => {
	return response.data;
}, (error) => {
	return Promise.reject(error);
});

const services = (urlStr: string) => {
	if (typeof urlStr !== 'string') {
		throw new Error('创建请求的正确格式为 "method /url" 的形式，如 "get /news/detail" ');
	}
	// \s 空格
	// + 多个
	const [method, url]: any = urlStr.trim().split(/\s+/);
	if (!method || !url) {
		throw new Error('缺少请求方式或URL');
	}
	return (body = {}, opts?: FetchConfig) => {
		opts = { isRefresh: true, useToken: true, ...opts };
		const options: FetchConfig = { url, method, ...opts };
		if (method.toLowerCase() === 'get') {
			options.params = body;
		} else {
			options.data = body;
		}
		return instance(options).then(res => {
			const { status, code, msg }: FetchResponse = res;
			if (status !== 0) {
				msg && message.error(msg);
			}
			/// 指定码处理
			if (code == 2222) {

			}
			return res;
		}).catch(err => {
			if (Object.prototype.toString.apply(err) === '[object Error]') {
				message.error('网络或服务器错误，请稍后重试');
			}
			return Promise.reject(err);
		}).finally(clearNProgress);
	}
}


function clearNProgress() {
	setTimeout(() => {
		NProgress.done();
		store.dispatch(setProgress(false));
	}, 200)
}

export default services;