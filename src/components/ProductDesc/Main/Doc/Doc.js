import React, { Component, PropTypes } from 'react'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'
import styles from './Doc.css'

export default class Doc extends Component {

	render() {
		return (
			<dl className={styles.article}>
				<dt>接口文档</dt>
				<dd>React Router is built In a nutshell, a history knows how to listen to the browsers address
				bar for changes and parses the URL into a `location` object that the
				router can use to match routes and render the correct set of components
				</dd>
				<dt>简介</dt>
				<dd>
					fdsafdsafasd
					<p className={styles.href}>竞彩软件接口文档<Icon type="right" /> </p>
				</dd>
				<dt>安装</dt>
				<dd>运行环境</dd>
				<dt>231312</dt>
				<dd>fdsafdsafasd</dd>
				<dt>231312</dt>
				<dd>fdsafdsafasd</dd>
			</dl>
		)
	}
}
