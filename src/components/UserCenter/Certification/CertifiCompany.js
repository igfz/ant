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
				<Col className={styles['money']} 
				lg={20} md={20} sm={20} xs={20}>

					<Row type='flex' align='bottom'>
						<Col lg={12} md={12} sm={12} xs={12}>
							<Row>
								<span>公司名称</span>
							</Row>
							<Row>
								<Input placeholder="Basic usage" />
							</Row>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={12} md={12} sm={12} xs={12}>
							<Row>
								<span>营业执照注册号</span>
							</Row>
							<Row>
								<Input placeholder="Basic usage" />
							</Row>
						</Col>
					</Row>
				
					<Row type='flex' align='bottom'>
						<Col lg={12} md={12} sm={12} xs={12}>
							<Row>
								<span>营业执照扫描件</span>
							</Row>
							<Row>
								<Input placeholder="Basic usage" />
							</Row>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={12} md={12} sm={12} xs={12}>
							<Row>
								<span>法人姓名</span>
							</Row>
							<Row>
								<Input placeholder="Basic usage" />
							</Row>
						</Col>
					</Row>
					<Row type='flex' align='bottom'>
							<Col lg={16} md={16} sm={16} xs={16}>
								<Row>
									<span>法人身份证扫描（正面</span>
								</Row>
								<Row>
									<Col lg={13} md={13} sm={13} xs={13}>
										<Input placeholder="Basic usage" />
									</Col>
									<Col  lg={10} md={10} sm={10} xs={10}>
										<Button className={styles['choose_btn']}>
									    选择文件
									  </Button>
								     <span className={styles['blue_text']}>
								    	 查看实例
								     </span>
							    </Col>
								</Row>
							</Col>
						</Row>
						
						<Row type='flex' align='bottom'>
							<Col lg={16} md={16} sm={16} xs={16}>
								<Row>
									<span>法人身份证扫描（反面）</span>
								</Row>
								<Row>
									<Col lg={13} md={13} sm={13} xs={13}>
										<Input placeholder="Basic usage" />
									 </Col>
									 <Col  lg={11} md={11} sm={11} xs={11}>
										<Button className={styles['choose_btn']} > 
											选择文件							    
										</Button>
								    <span className={styles['blue_text']}>
								    	查看实例
								    </span>
							    </Col>
								</Row>
							</Col>
						</Row>
						<Row type='flex' align='bottom'>
							<Col lg={16} md={16} sm={16} xs={16}>
								<Row>
									<Button className={styles['sub_btn']} > 
											提交							    
									</Button>
								</Row>
								<Row className={styles['explain_pc']}>
									<Col>
										<span >
											照片大小要求：基本都jfk怪不得jfk国内的接口功能手机打开
										</span>
									</Col>
								</Row>
							</Col>
						</Row>
				</Col>
			</Row>
			)
	}
}