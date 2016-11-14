import React, { Component, PropTypes } from 'react'
import {Row,Col,Button} from 'antd'
import styles from './Success.css'
import {Link } from 'react-router'


export default class Success extends Component {

	render() {
		return (
				<div className={styles.wrap}>
          <h1>注册成功</h1>
          <ul className={styles.info}>
            <li>用户名：发的萨芬撒</li>
            <li>邮　箱：发的萨芬撒</li>
            <li>手　机：发的萨芬撒</li>
          </ul>
          <Row className={styles.bottom}>
            <Col span={8} className={styles.tc}><Button type="ghost">发送短信</Button></Col>
            <Col span={8} className={styles.tc}><Button type="ghost">发送短信</Button></Col>
            <Col span={8} className={styles.tc}><Button type="ghost">发送短信</Button></Col>
          </Row>
        </div>
		)
	}
}
