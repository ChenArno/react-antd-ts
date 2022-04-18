/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-18 17:24:41
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-18 17:44:44
 */
/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-01-04 10:32:27
 * @LastEditors: chenArno
 * @LastEditTime: 2022-01-04 12:39:09
 */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

interface BlackLayoutProps {

}

const BlackLayout: React.FC<BlackLayoutProps> = props => {
	const { children }: any = props;
	const navigate = useNavigate();
	// const { logout } = useSelector(({ home }: any) => home)

	useEffect(() => {
		if (true) {
			navigate('/app', { replace: true });
		}
	}, [])

	return <>
		{children}
	</>;
}

export default BlackLayout