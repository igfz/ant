import React, { Component, PropTypes } from 'react'
import styles from './Main.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class Main extends Component {

	render() {

		return (
			<div>
				<h2 className={styles.tit}>彩票服务</h2>
				<Row type="flex" justify="space-between" className={styles.row}>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={6} md={6} lg={6} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
				</Row>

				<h2 className={styles.tit}>彩票服务</h2>
				<Row type="flex" justify="space-between" className={styles.row}>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={6} md={6} lg={6} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
				</Row>

				<h2 className={styles.tit}>彩票服务</h2>
				<Row type="flex" justify="space-between" className={styles.row}>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={5} md={5} lg={5} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
					<Col xs={24} sm={6} md={6} lg={6} className={styles.col}>
						<h3>SDK文档</h3>
						<ul>
							<li><Link to="/documents/detail">竞彩软件SDK</Link></li>
							<li><Link to="/documents/detail">传统足彩SDK</Link></li>
						</ul>
					</Col>
				</Row>


					<div>
						<Button 
							type="primary" 
							size="large" 
							className={styles.btn}>
								免费试用
						</Button>
					</div>

			</div>
		)
	}
}
