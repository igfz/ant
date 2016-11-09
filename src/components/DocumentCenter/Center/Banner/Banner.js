import React, { Component, PropTypes } from 'react'
import styles from './Banner.css'
import { Icon,Row,Col,Button } from 'antd'
import {browserHistory,Link } from 'react-router'
import SearchInput from '../../SearchInput'

export default class ProductDesc extends Component {

	render() {

		return (
			<div className={styles.top}>
				<div className={styles.bannerBox}>
					<div className={styles.item}>
						<Row className={styles.banner}>
							<Col xs={21} sm={21} md={12} lg={12} push = {1}>
								<h3>文档中心</h3>
								<Link to="/documents/search"><SearchInput 
									placeholder="输入文档/代码、快速关键字检索..."
							    onSearch={value => {console.log(value);browserHistory.push('/documents/search');}} 
							    style={{ 'width': '100%' }}
							    size="large"/></Link>
								<p>
									<span>云服务器</span><span>云数据库</span>
									<span>域名备案</span><span>CDN</span>
									<span>注册</span><span>购买</span>
									<span>密钥</span><span>SSH</span>
								</p>
							</Col>
							<Col xs={0} sm={0} md={7} lg={7} push = {4}>
								<div className={styles.img}></div>
							</Col>
						</Row>
					</div>
				</div>
			</div>	
		)
	}
}
