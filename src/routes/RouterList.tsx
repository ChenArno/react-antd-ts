/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-18 17:32:31
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-19 14:12:54
 */
import { useRoutes, RouteObject } from 'react-router-dom';
import NoMatch from '@/pages/NoMatch/404';
import App from '@/pages/App';

const list: RouteObject[] = [{

}];

console.log(list);

const RouterList = (props: any) => {
	return useRoutes([
		{ path: '/app', element: <App /> },
		{ path: '*', element: <NoMatch /> }
	]);
}

export default RouterList