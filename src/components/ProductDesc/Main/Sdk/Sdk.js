import React, { Component, PropTypes } from 'react'
import styles from './Sdk.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class Sdk extends Component {

	render() {
		return (
			<dl className={styles.article}>
				<dt>SDK下载</dt>
				<dd>
					<Row type="flex" justify="space-between">
						<Col xs={24} sm={23} md={5} lg={5} className={styles.item}>
							<div className={styles.icon}></div>
							<h4>Objective-C(IOS/Mac)</h4>
							<Button type='ghost'>立即下载</Button>
						</Col>
						<Col xs={24} sm={23} md={5} lg={5} className={styles.item}>
							<div className={styles.icon}></div>
							<h4>Java</h4>
							<Button type='ghost'>立即下载</Button>
						</Col>
						<Col xs={24} sm={23} md={5} lg={5} className={styles.item}>
							<div className={styles.icon}></div>
							<h4>Java(服务端)</h4>
							<Button type='ghost'>立即下载</Button>
						</Col>
						<Col xs={24} sm={23} md={5} lg={5} className={styles.item}>
							<div className={styles.icon}></div>
							<h4>PHP(服务端)</h4>
							<Button type='ghost'>立即下载</Button>
						</Col>
					</Row>
				</dd>
				<dt>简介</dt>
				<dd>fdsafdsafasd</dd>
				<dt>231312</dt>
				<dd>fdsafdsafasd</dd>
				<dt>231312</dt>
				<dd>fdsafdsafasd</dd>
				<dt>231312</dt>
				<dd>fdsafdsafasd</dd>
			</dl>
		)
	}
}
