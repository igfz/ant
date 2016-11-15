import React, { Component, PropTypes } from 'react'
import styles from './Menu.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class Menu extends Component {

	render() {

		return (
			<ul className={styles.menu}>
				<Link to="/application/setting"><li className={styles.active}>基本信息</li></Link>
				<Link to="/application/setting/key"><li>应用key</li></Link>
				<Link to="/application/setting/service"><li>服务开关</li></Link>
			</ul>
		)
	}
}
