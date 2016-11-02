import React, { Component, PropTypes } from 'react'
import styles from './AppKey.css'
import { Icon,Row,Col,Button,Input } from 'antd'
import {Link } from 'react-router'

export default class AppKey extends Component {

	render() {
		return (
			<div>
				<h2 className={styles.title}>应用key</h2>
				<div className={styles.warp}>
					<p>APP ID</p>
					<Row type="flex" justify="space-between">
						<Col span={17}>
							<Input defaultValue="48HGHKDBE28HJ28HH2FFB-GT33" readOnly/>
						</Col>
						<Col span={3}><Button type="ghost">复制</Button></Col>
						<Col span={3}></Col>
					</Row>
				</div>
				<div className={styles.warp}>
					<p>APP Key</p>
					<Row type="flex" justify="space-between">
						<Col span={17}>
							<Input defaultValue="48HGHKDBE28HJ28HH2FFB-GT33" readOnly/>
						</Col>
						<Col span={3}><Button type="ghost">复制</Button></Col>
						<Col span={3}></Col>
					</Row>
				</div>
				<div className={styles.warp}>
					<p>Master Key</p>
					<Row type="flex" justify="space-between">
						<Col span={17}>
							<Input defaultValue="48HGHKDBE28HJ28HH2FFB-GT33" readOnly/>
						</Col>
						<Col span={3}><Button type="ghost">复制</Button></Col>
						<Col span={3}><Button type="ghost">重置</Button></Col>
					</Row>
					<span className={styles.tip}> Master Key是最高权限的Key，一旦泄漏请立即使用 【重置】 按钮进行重置</span>
				</div>
			</div>
		)
	}
}
