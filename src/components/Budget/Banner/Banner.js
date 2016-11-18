import React, { Component, PropTypes } from 'react'
import styles from './Banner.css'
import { Icon,Row,Col,Button } from 'antd'
import {browserHistory,Link } from 'react-router'

export default class ProductDesc extends Component {

	render() {

		return (
			<div className={styles.top}>
				<div className={styles.bannerBox}>
					<div className={styles.item}>
						<Row className={styles.banner}>
							<Col xs={21} sm={21} md={12} lg={12} push = {1}>
								<h3>预算</h3>
								<p>
									<span className={styles.losange}></span>近百种足篮赛事赛程
								</p>
								<p>
									<span className={styles.losange}></span>足球拥有13种赛前玩法，19种赛中玩法
								</p>
								<p>
									<span className={styles.losange}></span>玩法赔率即时更新
								</p>
							</Col>
							<Col xs={0} sm={0} md={7} lg={7} push = {4}>
								<div className={styles.img}></div>
							</Col>
						</Row>
					</div>
				</div>
			</div>	
		)
	}
}
