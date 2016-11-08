import React, { Component, PropTypes } from 'react'
import styles from './DocDetail.css'
import { Icon,Row,Col,Button,Breadcrumb  } from 'antd'
import {Link } from 'react-router'
import Sider from './Sider'

export default class DocDetail extends Component {

	render() {

		return (
			<div style={{'maxWidth':'1200px','minHeight':'1200px','margin':'3% auto'}}>
				<div className={styles.breadcrumb}>
					<Breadcrumb separator=">">
				    <Breadcrumb.Item>Home</Breadcrumb.Item>
				    <Breadcrumb.Item href="">App Center</Breadcrumb.Item>
				    <Breadcrumb.Item href="">App List</Breadcrumb.Item>
				    <Breadcrumb.Item>An Application</Breadcrumb.Item>
				  </Breadcrumb>
				</div>
				
				<Row type="flex" justify="space-between">
					<Col xs={21} sm={21} md={4} lg={4}>

					<Sider />

					</Col>
					<Col xs={22} sm={22} md={19} lg={19}>
						<div className={styles.article}>
							<h1>竞猜软件SDK文档</h1>
							<p>
								对象存储（Object Storage Service，简称OSS），是阿里云对外提供的海量、安全和高可靠的云存储服务。RESTFul API的平台无关性，容量和处理能力的弹性扩展，按实际容量付费真正
							</p>
							<h2>简介</h2>
							<p>
								对象存储（Object Storage Service，简称OSS），是阿里云对外提供的海量、安全和高可靠的云存储服务。RESTFul API的平台无关性，容量和处理能力的弹性扩展，按实际容量付费真正使您专注于核心业务。
							</p>
							<h3>231312</h3>
							<p>fdsafdsafasd</p>
							<h4>231312</h4>
							<p>fdsafdsafasd</p>
						</div>
					</Col>
				</Row>

			</div>
		)
	}
}
