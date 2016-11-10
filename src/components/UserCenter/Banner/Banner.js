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
							<Col xs={21} sm={21} md={12} lg={12} push = {1}>
								<h3>彩票服务</h3>
								<p>
									涵盖中国体育彩票下，竞彩足篮球、传统足彩、北京单场的全玩法赛程、固定奖金和SP值服务
								</p>
								<Button type="primary">了解更多</Button>
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
