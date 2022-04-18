/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2022-04-18 17:43:12
 * @LastEditors: chenArno
 * @LastEditTime: 2022-04-18 17:43:12
 */
import React from 'react'
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom'

const Result404: React.FC<any> = props => {
	const naviagete = useNavigate();

	return <div className="lay-center">
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={<Button type="primary" onClick={() => { naviagete(-1) }}>返回主页</Button>}
		/>
	</div>
}

export default Result404