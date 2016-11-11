/*
充值页面
zfl 2016 11 10
*/
import React, { Component, PropTypes } from 'react'
import { Row, Col, Button, Input } from 'antd'
import *as styles from './Recharge.css'
import {Link} from 'react-router'

class Recharge extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Row className={styles['r_wrap']} >
				<div  className={styles['center_wrap']} >
					<Row className={styles['pay']}>
					<Col lg={24} md={24} sm={24} xs={24}>
						充值
					</Col>
				</Row>
				<Row className={styles['pay_mode']}>
					<Col lg={24} md={24} sm={24} xs={24}>
						<Button>支付宝</Button>
						<Button className={styles['wechat']}>微信</Button>
					</Col>
				</Row>
				<Row className={styles['pay_input']}>
					<Col lg={5} md={5} sm={5} xs={5}>
							充值金额
					</Col>
					<Col lg={19} md={19} sm={19} xs={19}>
						<Input placeholder="Basic usage" />
					</Col>
				</Row>
				<Row className={styles['btn_col']}>
					<Col lg={24} md={24} sm={24} xs={24} >
						<Button className={styles['btn_re']}>
						 <Link to='/usercenter/paysuccess'>确定充值 </Link>
						</Button>
					</Col>
				</Row>
				<Row  className={styles['bank_info']}>
					<Col lg={24} md={24} sm={24} xs={24} >
						开户行：尔特人特瑞特人<br/>
						开户行：尔特人特瑞特人<br/>
						开户行：尔特人特瑞特人<br/>
						开户行：尔特人特瑞特人<br/>
						开户行：尔特人特瑞特人<br/>
					</Col>
				</Row>
				<Row >
					<Col lg={24} md={24} sm={24} xs={24} >
					可以通过微信充值可以通过微信充值可以通过微信充值可以通过微信充值
					</Col>
				</Row>
				</div>
			</Row>
			)
	}
}
export default Recharge