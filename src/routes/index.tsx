/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-18 17:19:47
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-19 14:28:50
 */
import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BlackLayout from '@/layouts/BlackLayout';
import RouterList from './RouterList';
import Loading from '@/components/Loading';

const { REACT_APP_HOMEPAGE } = process.env

interface RoutesProps {

}

const Routes: React.FC<RoutesProps> = (props) => {
	return <Suspense fallback={<Loading />}>
		<Router basename={REACT_APP_HOMEPAGE}>
			<BlackLayout>
				<RouterList />
			</BlackLayout>
		</Router>
	</Suspense>
}

export default Routes;