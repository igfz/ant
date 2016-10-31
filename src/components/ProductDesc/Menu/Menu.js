import React, { Component, PropTypes } from 'react'
import styles from './Menu.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class Menu extends Component {

	render() {

		return (
			<ul className={styles.menu}>
				<Link to="/product"><li className={styles.active}>产品详情</li></Link>
				<Link to="product/demo"><li>Demo演示</li></Link>
				<Link to="/product/sdk"><li>SDK下载</li></Link>
				<Link to="/product/document"><li>接口文档</li></Link>
			</ul>
		)
	}
}
