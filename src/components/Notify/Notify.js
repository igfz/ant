import React, { Component, PropTypes } from 'react'
import styles from './Notify.css'
import { Icon,Row,Col } from 'antd'
import {Link } from 'react-router'

export default class Notify extends Component {

  render() {
    return (
			<div className={styles.notify}>
				<Row className={styles.inf}>
					<Col span={1} offset={1}><Icon type="notification" /></Col>
					<Col>通知1111111</Col>
				</Row>
			</div>
    )
  }
}
