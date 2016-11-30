import React, { Component, PropTypes } from 'react'
import styles from './DocDetail.css'
import { Icon,Row,Col,Button,Breadcrumb  } from 'antd'
import {Link } from 'react-router'
import Sider from './Sider'

export default class DocDetail extends Component {
	documentTitle(){
		const url=window.location.hash
		if(url.indexOf("lottery")!=-1){
			return "彩票服务"
		}else if(url.indexOf("game")!=-1){
			return "竞猜游戏"
		}else if(url.indexOf("message")!=-1){
			return "数据资讯"
		}else{
			return "其他"
		}
	}

	render() {
		return (
			<div style={{'maxWidth':'1200px','minHeight':'1200px','margin':'3% auto'}}>
				<div className={styles.breadcrumb}>
					<Breadcrumb separator=">">
				    <Breadcrumb.Item>首页</Breadcrumb.Item>
				    <Breadcrumb.Item href="">文档中心</Breadcrumb.Item>
				    <Breadcrumb.Item href="">{this.documentTitle()}SDK文档</Breadcrumb.Item>
				  </Breadcrumb>
				</div>
				
				<Row type="flex" justify="space-between">
					<Col xs={23} sm={23} md={4} lg={4}>

					<Sider />

					</Col>
					<Col xs={23} sm={23} md={19} lg={19}>
						<div className={styles.article}>
							<h1>{this.documentTitle()}SDK文档</h1>
							<p>
								对象存储（Object Storage Service，简称OSS），是阿里云对外提供的海量、安全和高可靠的云存储服务。RESTFul API的平台无关性，容量和处理能力的弹性扩展，按实际容量付费真正使您专注于核心业务。
							</p>
							<h2>简介</h2>
							<p>
								对外提供的海量、安全和高可靠的云存储服务。RESTFul API的平台无关性，容量和处理能力的弹性扩展，按实际容量付费真正使您专注于核心业务。
							</p>
							<p>
								提供标准的RESTful API接口，丰富的SDK包，客户端工具、控制台，您可以像使用文件一样，方便上传/下载、检索、管理用于Web网站或者移动应用海量的数据。
							</p>
							<Row className={styles["cloud-service"]}>
					      <Col span={8} className={styles.servers}>
					      	<div className={styles["servers-left"]}>
					      		<Icon type="cloud-o" />
					      		<p>ESC</p>
					      		<p>云服务器</p>
					      	</div>
					      	<div className={styles["servers-describe"]}>WEB程序、数据库</div>
					      </Col>
					      <Col span={4}>内网访问</Col>
					      <Col span={12} className={styles.servers}>
					      	<div className={styles["servers-left"]}>
					      		<Icon type="cloud-o" />
					      		<p>OSS</p>
					      		<p>云存储服务器</p>
					      	</div>
					      	<div className={styles["servers-describe"]}>静态脚本、附件、图片、视频/音频</div>
					      </Col>
					    </Row>
							<h3>二级标题</h3>
							<p>
								COS使您的数据接入变得异常简单，COS提供标准的Restful API接口，帮助您便利的实现数据的上传、下载、查询、删除等功能。同时COS也为您提供了多种语言的SDK，您可以直接利用SDK进行二次开发，省去了复杂的接入成本。此外，Web控制台也可以帮助到您便捷地管理数据和监控数据。
							</p>
							<h4>三级标题</h4>
							<p>
								COS为您提供了70余个上传节点，当您上传数据时，COS会为您自动选择最优的路径，帮您应对上传速度缓慢的问题，网络连通率可达99.9%。当你下载数据时，结合CDN使用还可以将源站内容发布到最接近终端的边缘节点，提高访问成功率，降低访问时延。
							</p>
							<Row className={styles["cloud-service"]}>
					      <Col span={8} className={styles.servers}>
					      	<div className={styles["servers-left"]}>
					      		<Icon type="cloud-o" />
					      		<p>ESC</p>
					      		<p>云服务器</p>
					      	</div>
					      	<div className={styles["servers-describe"]}>WEB程序、数据库</div>
					      </Col>
					      <Col span={4}>内网访问</Col>
					      <Col span={12} className={styles.servers}>
					      	<div className={styles["servers-left"]}>
					      		<Icon type="cloud-o" />
					      		<p>OSS</p>
					      		<p>云存储服务器</p>
					      	</div>
					      	<div className={styles["servers-describe"]}>静态脚本、附件、图片、视频/音频</div>
					      </Col>
					    </Row>
							<h3>二级标题</h3>
							<p>
								COS使您的数据接入变得异常简单，COS提供标准的Restful API接口，帮助您便利的实现数据的上传、下载、查询、删除等功能。同时COS也为您提供了多种语言的SDK，您可以直接利用SDK进行二次开发，省去了复杂的接入成本。此外，Web控制台也可以帮助到您便捷地管理数据和监控数据。
							</p>
							<div className={styles.remark}>
								<div>注：</div>
								<div>
									<p>1默认情况下，文件的删除权限是关闭的，需要进入控制台。</p>
									<p>2默认情况下，文件的删除权限是关闭的，需要进入控制台。</p>
									<p>3默认情况下，文件的删除权限是关闭的，需要进入控制台。</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>

			</div>
		)
	}
}
