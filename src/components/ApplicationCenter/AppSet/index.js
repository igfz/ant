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
		<Row type="flex" justify="center">
			<Col xs={22} sm={22} md={5} lg={5}>

			<Menu />

			</Col>
			<Col xs={22} sm={22} md={19} lg={19}>

			{children}

			</Col>
		</Row>
	)
}
