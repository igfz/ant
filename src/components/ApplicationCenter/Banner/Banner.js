import React, { Component, PropTypes } from 'react'
import styles from './Banner.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class ProductDesc extends Component {

	render() {
		return (
			<div className={styles.top}>
				<div className={styles.bannerBox}>
					<div className={styles.item}>
						<Row  className={styles.banner}>
							<Col span = {12} push = {1}>
								<h3>应用中心</h3>
								<p>
									近百种足篮赛事赛程 足球拥有13种赛前玩法，19种赛中玩法 玩法赔率即时更新
								</p>
							</Col>
							<Col span = {7} push = {4}>
								<div className={styles.img}></div>
							</Col>
						</Row>
					</div>
				</div>
			</div>	
		)
	}
}
