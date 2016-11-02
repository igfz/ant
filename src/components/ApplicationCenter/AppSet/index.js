import React, { Component, PropTypes } from 'react'
import { Icon,Row,Col,Button } from 'antd'
import {
	Link,
	Router,
	Route,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router'

import Menu from './Menu'
import BaseInfo from './BaseInfo'
import AppKey from './AppKey'
import AppService from './AppService'

export default function AppSet({ children }) {
	return (
		<Row>
			<Col span={5}>

			<Menu />

			</Col>
			<Col span={19}>

			{children}

			</Col>
		</Row>
	)
}
