import React, { Component, PropTypes } from 'react'
import styles from './BaseInfo.css'
import { Icon,Row,Col,Button,Input } from 'antd'
import {Link } from 'react-router'

export default class BaseInfo extends Component {

	render() {
		return (
			<div>
				<h2 className={styles.title}>基本信息</h2>
				<div className={styles.warp}>
					<p>应用名称</p>
					<Input placeholder="应用1" defaultValue="应用1"/>
					<span className={styles.creatTime}>创建时间:2016-09-29</span>
				</div>
				<div className={styles.warp}>
					<p>应用描述</p>
					<Input placeholder="描述123描述abc" defaultValue="描述123描述abc"/>
				</div>
				<div className={styles.warp}>
					<p>删除应用</p>
					<Input placeholder="输入密码后可删除当前应用" />
				</div>
				<Button className={styles.button} type="primary" disabled>确认删除</Button>
			</div>
		)
	}
}
