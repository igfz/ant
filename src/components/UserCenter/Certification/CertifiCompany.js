/*
 实名认证页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon, Checkbox, Input   } from 'antd'
import *as styles from './Certification.css'

export default class Certification extends Component{
	constructor(props){
		super(props);
	}
	onChange(e){
		console.log(`checked = ${e.target.checked}`);
	}

	render(){
		return(
			<div className={styles['wrap_input']}>
				<form>
					<Row>
						<Col lg={10} md={10} sm={24} xs={24}>
							公司名称
							<Input placeholder="请输入公司名称" />
						</Col>
					</Row>
					<Row>
						<Col lg={10} md={10} sm={24} xs={24}>
							营业执照注册号
							<Input placeholder="请输入营业执照注册号" />
						</Col>
					</Row>
					<Row>
						<Col lg={10} md={10} sm={24} xs={24}>
							营业执照扫描
							<span className={styles['link_mob']}>查看示例</span>
							<Row>
								<Col lg={18} md={18} sm={18} xs={18}>
									<Input placeholder="请上传营业执照扫描件" />
								</Col>
								<Col lg={6} md={6} sm={6} xs={6}>
									<Button className={styles['choose_btn']}>选择文件</Button>
								</Col>
							</Row>
						</Col>
						<Col lg={10} md={10} sm={0} xs={0}>
							<span className={styles['link_sp']}>查看示例</span>
						</Col>
					</Row>
					<Row>
						<Col lg={10} md={10} sm={24} xs={24}>
							法人姓名
							<Input placeholder="请输入法人姓名" />
						</Col>
					</Row>
					<Row>
						<Col lg={10} md={10} sm={24} xs={24}>
							法人身份证号
							<Input placeholder="请输入法人身份证号" />
						</Col>
					</Row>
						<Row>
						<Col lg={10} md={10} sm={24} xs={24}>
							法人身份证扫描(正面)
							<span className={styles['link_mob']}>查看示例</span>
							<Row>
								<Col lg={18} md={18} sm={18} xs={18}>
									<Input placeholder="请上传法人身份证扫描(正面)" />
								</Col>
								<Col lg={6} md={6} sm={6} xs={6}>
									<Button className={styles['choose_btn']}>选择文件</Button>
								</Col>
							</Row>
						</Col>
						<Col lg={10} md={10} sm={0} xs={0}>
							<span className={styles['link_sp']}>查看示例</span>
						</Col>
					</Row>
					<Row>
						<Col lg={10} md={10} sm={24} xs={24}>
							法人身份证扫描(反面)
							<span className={styles['link_mob']}>查看示例</span>
							<Row>
								<Col lg={18} md={18} sm={18} xs={18}>
									<Input placeholder="请上传法人身份证扫描(反面)" />
								</Col>
								<Col lg={6} md={6} sm={6} xs={6}>
									<Button className={styles['choose_btn']}>选择文件</Button>
								</Col>
							</Row>
						</Col>
						<Col lg={10} md={10} sm={0} xs={0}>
							<span className={styles['link_sp']}>查看示例</span>
						</Col>
					</Row>
					<Row>
						<Col lg={3} md={3} sm={24} xs={24}>
							<Button className={styles['btn_sub']}>提交</Button>
						</Col>
					</Row>
					<Row>
						<Col lg={24} md={24} sm={24} xs={24}>
							<span className={styles['pic']}>
								照片要求：文件大小不错过300k，支持格式JPEG/JPG/PNG,身份证清晰可见
							</span>
						</Col>
					</Row>
				</form>
			</div>
			)
	}
}