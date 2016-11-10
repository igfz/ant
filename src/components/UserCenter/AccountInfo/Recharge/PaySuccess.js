/*
支付成功页面
zfl 2016 11 10
*/
import React, { Component, PropTypes } from 'react'
import { Row, Col, Button } from 'antd'
import *as styles from './PaySuccess.css'

class PaySuccess extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Row className={styles['r_wrap']} >
				<Row className={styles['pay_s']}>
					<Col lg={24}>
						支付成功！
					</Col>
				</Row>
				<Row>
					<Col lg={24}>
						订单号：56156486515
					</Col>
				</Row>
				<Row>
					<Col lg={24}>
						订单金额：54588
					</Col>
				</Row>
				<Row className={styles['btn_col']}>
					<Col lg={24} >
						<Button className={styles['btn_re']}> 返回账号信息 </Button>
					</Col>
				</Row>
			</Row>
			)
	}
}
export default PaySuccess