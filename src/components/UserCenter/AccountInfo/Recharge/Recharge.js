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
				<div className={styles['center_wrap']}>
					<Row className={styles['rechar_text']} >
					 <Col lg={24} md={24} sm={24} xs={24}>
					 		<span >充值</span>
					 </Col>
					</Row>
					<Row className={styles['wrap_btn']} >
					 <Col lg={11} md={11} sm={24} xs={24}>
					 		<Button className={styles['alipay_btn']}>支付宝</Button>
					 </Col>
					 <Col lg={11} md={11} sm={24} xs={24}>
					 		<Button className={styles['wechat_btn']}>微信</Button>
					 </Col>
					</Row>
					<Row className={styles['recharge']} >
					 <Col lg={4} md={4} sm={4} xs={4}>
					 	充值金额
					 </Col>
					 <Col lg={20} md={20} sm={20} xs={20}>
					 		<Input placeholder="请输入充值金额"></Input>
					 </Col>
					</Row>
					<Row className={styles['wrap_sum']} >
						<Col lg={24} md={24} sm={24} xs={24}>
							<Button>确定支付</Button>
						</Col>
					</Row>
					<Row className={styles['person_detail']} >
						<Col lg={24} md={24} sm={24} xs={24}>
							开户行：哈迪斯感觉<br/>
							银行账号：56131231322<br/>
							账户名称：章鱼彩票<br/>
							开户行信息：章鱼彩票
						</Col>
					</Row>
					<Row className={styles['explain']} >
						<Col lg={24} md={24} sm={24} xs={24}>
							可以通过对公付款充值，汇款附言里请务必写明用户名或者绑定手机号
						</Col>
					</Row>
				</div>
			)
	}
}
export default Recharge