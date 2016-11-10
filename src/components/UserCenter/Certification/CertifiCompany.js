/*
 实名认证页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon, Checkbox, Input   } from 'antd'
import *as styles from './Certification.css'

export default class CertifiCompany extends Component{
	constructor(props){
		super(props);
	}
	onChange(e){
		console.log(`checked = ${e.target.checked}`);
	}
	render(){
		return(
			<Row className={styles['r_wrap']}>
				<Col className={styles['money']} lg={24}>
					<Row className={styles['money_info']}
						Row type='flex' align='bottom'>
							<Col>实名认证方式</Col>						
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={20}>
							<Checkbox onChange={this.onChange}>个人</Checkbox>
							<Checkbox onChange={this.onChange}>公司</Checkbox>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={16}>
							<Row>
								公司名称
							</Row>
							<Row>
								<Input placeholder="Basic usage" />
							</Row>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={16}>
							<Row>
								营业执照注册号
							</Row>
							<Row>
								<Input placeholder="Basic usage" />
							</Row>
						</Col>
					</Row>
				
					<Row type='flex' align='bottom'>
						<Col lg={16}>
							<Row>
								营业执照扫描件
							</Row>
							<Row>
								<Input placeholder="Basic usage" />
							</Row>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={16}>
							<Row>
								法人姓名
							</Row>
							<Row>
								<Input placeholder="Basic usage" />
							</Row>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
							<Col lg={24}>
								<Row>
									法人身份证扫描（正面）
								</Row>
								<Row>
									<Col lg={16}>
										<Input placeholder="Basic usage" />
									</Col>
									<Col  lg={8}>
										<Button >
									    选择文件
									  </Button>
								     查看实例
							    </Col>
								</Row>
							</Col>
						</Row>
						
						<Row type='flex' align='bottom'>
							<Col lg={24}>
								<Row>
									法人身份证扫描（反面）
								</Row>
								<Row>
									<Col lg={16}>
										<Input placeholder="Basic usage" />
									 </Col>
									 <Col  lg={8}>
										<Button > 
											选择文件							    
										</Button>
								    查看实例
							    </Col>
								</Row>
							</Col>
						</Row>
						<Row type='flex' align='bottom'>
							<Col lg={24}>
								<Row>
									<Button > 
											提交							    
									</Button>
								</Row>
								<Row>
									照片大小要求：基本都jfk怪不得jfk国内的接口功能手机打开
								</Row>
							</Col>
						</Row>
				</Col>
			</Row>
			)
	}
}