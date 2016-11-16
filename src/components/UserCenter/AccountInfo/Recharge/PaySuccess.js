/*
支付成功页面
zfl 2016 11 10
*/
import React, { Component, PropTypes } from 'react'
import { Row, Col, Button } from 'antd'
import *as styles from './PaySuccess.css'
import { 	Link } from 'react-router'

class PaySuccess extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div  className={styles['success']}>
					<Row className={styles['pay_suc']}>
						<Col lg={24} md={24} sm={24} xs={24}>
							支付成功！
						</Col>
					</Row>
					<Row className={styles['order_num']}>
						<Col lg={24} md={24} sm={24} xs={24} >
							订单号：56156486515
						</Col>
					</Row>
					<Row className={styles['order_price']}>
						<Col lg={24} md={24} sm={24} xs={24} >
							订单金额：54588
						</Col>
					</Row>
					<Row className={styles['btn_col']}>
						<Col lg={24} md={24} sm={24} xs={24} >
							<Button className={styles['btn_re']}>
							 <Link to="/usercenter/accountinfo">返回账号信息</Link>
							</Button>
						</Col>
					</Row>
			</div>
			)
	}
}
export default PaySuccess