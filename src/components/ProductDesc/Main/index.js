import React, { Component, PropTypes } from 'react'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

import Demo from './Demo'
import Detail from './Detail'
import Doc from './Doc'
import Sdk from './Sdk'

export default class Main extends Component {

	render() {

		let id = this.props.idx
		const contain = (id==0)?<Detail />:((id==1)?<Demo />:((id==2)?<Sdk />:<Doc />))

		return (
			<div>

				{contain}

			</div>
		)
	}
}
