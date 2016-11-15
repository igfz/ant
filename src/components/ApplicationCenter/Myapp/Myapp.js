import React, { Component, PropTypes } from 'react'
import styles from './Myapp.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class Myapp extends Component {

	render() {

		return (
			<div>
				<Row type="flex" justify="space-between" className={styles.top}>
					<Col xs={0} sm={0} md={3} lg={3}><h2>我的应用</h2></Col>
					<Col xs={24} sm={24} md={3} lg={3}><Button type="primary">创建应用</Button></Col>
				</Row>
				<Row type="flex" justify="center" className={styles.warp}>
					<Col xs={24} sm={24} md={4} lg={4} className={styles.name}>
						<div className={styles.icon}></div>
						<p>应用1</p>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>用户数</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>昨日请求</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>本月请求</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.set}>
						<Link to="/application/setting"><Button type="ghost">设置</Button></Link>
					</Col>
				</Row>
				<Row type="flex" justify="center" className={styles.warp}>
					<Col xs={24} sm={24} md={4} lg={4} className={styles.name}>
						<div className={styles.icon}></div>
						<p>应用2</p>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>用户数</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>昨日请求</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>本月请求</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.set}>
						<Link to="/application/setting"><Button type="ghost">设置</Button></Link>
					</Col>
				</Row>
				<Row type="flex" justify="center" className={styles.warp}>
					<Col xs={24} sm={24} md={4} lg={4} className={styles.name}>
						<div className={styles.icon}></div>
						<p>应用3</p>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>用户数</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>昨日请求</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.num}>
						<p>本月请求</p>
						<h3>23,086</h3>
					</Col>
					<Col xs={24} sm={24} md={5} lg={5} className={styles.set}>
						<Link to="/application/setting"><Button type="ghost">设置</Button></Link>
					</Col>
				</Row>
			</div>
		)
	}
}
