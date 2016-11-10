/*
 实名认证页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon } from 'antd'
import *as styles from './Certification.css'

export default class Certification extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Row className={styles['r_wrap']}>
				<Col className={styles['money']}>
					<Row className={styles['money_info']}
						Row type='flex' align='bottom'>
							<Col>实名认证方式</Col>						
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={1}>
							<Icon type='user'  />
						</Col>
						<Col lg={20}>
							用户名：1234abc的账号
							<Button>实名认证</Button>
							<Icon type='minus' />
							<Button>修改密码</Button>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={1}>
							<Icon type='id' />
						</Col>
						<Col lg={20}>
							账户ID：7894  123
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={1}>
							<Icon type='ohone' />
						</Col>
						<Col lg={20}>
								手机号码：1234564981321
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={1}>
							<Icon type='user' />
						</Col>
						<Col lg={20}>
								技术服务：您尚未购买我们的技术服务，
								<Button>点此购买</Button>
						</Col>
					</Row>
				</Col>
			</Row>
			)
	}
}