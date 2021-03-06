import React, { Component, PropTypes } from 'react'
import styles from './AppKey.css'
import { Icon,Row,Col,Button,Input } from 'antd'
import {Link } from 'react-router'
import CopyToClipboard from 'react-copy-to-clipboard';

export default class AppKey extends Component {
	render() {
		return (
			<div>
				<h2 className={styles.title}>应用key</h2>
				<div className={styles.warp}>
					<p>APP ID</p>
					<Row type="flex" justify="space-between">
						<Col xs={24} sm={24} md={17} lg={17}>
							<Input defaultValue="48HGHKDBE28HJ28HH2FFB-GT33" readOnly/>
						</Col>
						<Col xs={24} sm={24} md={3} lg={3}>
							<CopyToClipboard text="48HGHKDBE28HJ28HH2FFB-GT33">
							  <Button type="ghost">复制</Button>
							</CopyToClipboard>
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}></Col>
					</Row>
				</div>
				<div className={styles.warp}>
					<p>Open Key</p>
					<Row type="flex" justify="space-between">
						<Col xs={24} sm={24} md={17} lg={17}>
							<Input defaultValue="48HGHKDBE28HJ28HH2FFB-GT33" readOnly/>
						</Col>
						<Col xs={24} sm={24} md={3} lg={3}>
							<CopyToClipboard text="48HGHKDBE28HJ28HH2FFB-GT334">
							  <Button type="ghost">复制</Button>
							</CopyToClipboard>
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}></Col>
					</Row>
				</div>
				<div className={styles.warp}>
					<p>Secret Key</p>
					<Row type="flex" justify="space-between">
						<Col xs={24} sm={24} md={17} lg={17}>
							<Input defaultValue="48HGHKDBE28HJ28HH2FFB-GT33" readOnly/>
						</Col>
						<span className={styles.tip}> Master Key是最高权限的Key，一旦泄漏请立即使用 【重置】 按钮进行重置</span>
						<Col xs={11} sm={11} md={3} lg={3}>
							<CopyToClipboard text="48HGHKDBE28HJ28HH2FFB-GT35">
							  <Button type="ghost">复制</Button>
							</CopyToClipboard>
						</Col>
						<Col xs={11} sm={11} md={3} lg={3}>
							<Button type="ghost">重置</Button>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}
