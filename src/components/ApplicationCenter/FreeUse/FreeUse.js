import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Input } from 'antd'
import Banner from '../Banner/Banner.js'
import CenterTitle from '../../UserCenter/CenterTitle/CenterTitle.js'
import *as styles from './FreeUse.css'

export default class FreeUse extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className={styles['wrap_content']}>
				<Row>
					<Col className={styles['pc_flag']} lg={4} md={4} sm={4} xs={4}></Col>
					<Col lg={20} md={20} sm={24} xs={24} 
						className={styles['mb50']} >
						<Row className={styles['th']}>
						 <Col>
						 	<span>免费试用</span>
						 </Col>
						</Row>
						<Row type='flex' align='bottom'>
							<Col lg={17} md={17} sm={24} xs={24}>
								<Row>
									<span>应用名称</span>
								</Row>
								<Row className={styles['app_name']}>
									<span className={styles['create_time']}>
										创建时间：2015-02-01
									</span>									
									<Input  />
								</Row>
							</Col>
						</Row>
						<Row type='flex' align='bottom'>
							<Col lg={17} md={17} sm={24} xs={24}>
								<Row>
									<span>应用描述</span>
								</Row>
								<Row>
									<Input placeholder="Basic usage" />
								</Row>
							</Col>
						</Row>
						<Row type='flex' align='bottom'>
							<Col lg={17} md={17} sm={24} xs={24} >
							 <Button className={styles['btn']}>创建应用</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
			)
	}
}