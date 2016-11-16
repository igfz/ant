/*
 用户信息页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon } from 'antd'
import *as styles from './AccountInfo.css'
import {Link } from 'react-router'
import CenterTitle from '../CenterTitle'
export default class AccounTinfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<CenterTitle titleStr={'用户信息'}/>
				<Row className={styles['mt30']+' '+styles['mb30']}>
					<Col lg={24} md={24} sm={24} xm={24}
						className={styles['account_money']}>
						<span>账户余额</span>
						<span className={styles['in_monery']}>2,000.00元</span>
						<Button className={styles['in_btn']}>
							 <Link to='/usercenter/recharge'>立即充值</Link>
						</Button>
					</Col>
				</Row>
				<Row className={styles['mt30']} >
					<Col lg={24} md={24} sm={24} xm={24}>
						<Icon type='user'/>
						<span>用户名：456465</span>
						<span className={styles['link_sp']}>
							<Link to='/usercenter/certification'>实名认证</Link>
						</span>|
						<span className={styles['link_sp']}>
							修改密码
						</span>
					</Col>
				</Row>
				<Row className={styles['mt30']+ ' ' +styles['wrap_inner']} >
					<Col lg={24} md={24} sm={24} xm={24}>
						<Icon type='user'/>
						<span>账号ID：456465</span>
					</Col>
				</Row>
				<Row className={styles['mt30']} >
					<Col lg={24} md={24} sm={24} xm={24}>
						<Icon type='mobile'/>
						<span>手机号码：456465</span>
					</Col>
				</Row>
				<Row className={styles['mt30']} >
					<Col lg={24} md={24} sm={24} xm={24}>
						<Icon type='user'/>
						<span>技术支持：您尚未购买请点击</span>
						<span className={styles['link_sp']+' '+ styles['br_sp']} >点此购买</span>
					</Col>
				</Row>
				
			</div>
		
			)
	}
}