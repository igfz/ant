import React, { Component, PropTypes } from 'react'
import styles from './Demo.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class Demo extends Component {

	render() {
		return (
			<dl className={styles.article}>
				<dt>Demo演示</dt>
				<dd>
					<div className={styles.show}>
						<iframe src="http://m.8win.com" width="100%" height="100%">
						</iframe>
					</div>
					<Row type="flex" justify="space-between">
						<Col xs={23} sm={23} md={11} lg={11} className={styles.item}>
							<Row>
								<Col span={8} className={styles.iconI}>
									<Icon type="apple-o" />
								</Col>
								<Col span={16}>
									<h4>iOS demo下载</h4>
				          <Row type="flex" justify="space-around" className={styles.buttonBox}>
				          	<Col span={10}>
				            	<Button size='large' type='ghost'>使用说明</Button>
				            </Col>
				            <Col span={10}>
				            	<Button className={styles.blue} size='large' type='primary'>立即下载</Button>
				            </Col>
				          </Row>
								</Col>
							</Row>
						</Col>
						<Col xs={23} sm={23} md={11} lg={11} className={styles.item}>
							<Row>
								<Col span={8} className={styles.iconA}>
									<Icon type="android" />
								</Col>
								<Col span={16}>
									<h4>Android demo下载</h4>
				          <Row type="flex" justify="space-around" className={styles.buttonBox}>
				          	<Col span={10}>
				            	<Button size='large' type='ghost'>使用说明</Button>
				            </Col>
				            <Col span={10}>
				            	<Button className={styles.green} size='large' type='primary'>立即下载</Button>
				            </Col>
				          </Row>
								</Col>
							</Row>
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
