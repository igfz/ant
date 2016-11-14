/*
 用户信息页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon } from 'antd'
import *as styles from './AccountInfo.css'
import {Link } from 'react-router'
export default class AccounTinfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Row className={styles['r_wrap']}>
				<Col className={styles['money']}>
					<Row type='flex' align='bottom' className={styles['money_info']}>
						<Row type='flex' align='bottom' >
							<Col lg={24} md={24} sm={24} xs={24} 
								className={styles['accunt']}>
								<span className={styles['accunt-money']}>账户余额 </span>
								<span className={styles['money_num']}>
								 	2,000.00元
								</span>					
								<Button className={styles['pay_now']}>
									<Link to='/usercenter/recharge'>立即充值</Link>
								</Button>
							</Col>
							</Row>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={24} md={24} sm={24} xs={24} >
							<Icon type='user'  />
							用户名：1234abc的账号
							<span className={styles['blue_text']}>实名认证</span>
							|
							<span  className={styles['blue_text']} >修改密码</span>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={24} md={24} sm={24} xs={24}>
							<Icon type='ID' />
							账户ID：7894  123
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={24} md={24} sm={24} xs={24}>
							<Icon type='tablet' />
								手机号码：1234564981321
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={24} md={24} sm={24} xs={24}>
							<Icon type='user' />
								技术服务：您尚未购买我们的技术服务，
								<span  className={styles['blue_text']}>点此购买</span>
						</Col>
					</Row>
				</Col>
			</Row>
			)
	}
}