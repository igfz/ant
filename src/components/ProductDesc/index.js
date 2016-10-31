import Banner from './Banner'
import Menu from './Menu'
import Main from './Main'
import React, { Component, PropTypes } from 'react'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class ProductDesc extends Component {

	constructor(props) {
		super(props)
		this.clickLeftMenu = this.clickLeftMenu.bind(this)
		this.state = {idx:0}
	}

	shouldComponentUpdate (nextProps,nextState) {
		return this.state.idx != nextState.idx
	}

	clickLeftMenu(i) {
		this.setState({idx:i})
  }

	render() {

  	let idx = this.state.idx

		return (
			<div>

				<Banner />

				<div style={{'maxWidth':'1200px','minHeight':'1200px','margin':'55px auto'}}>
					<Row>
						<Col span={5}>

						<Menu 
							idx = {idx} 
							clickHandler = {this.clickLeftMenu} />

						</Col>
						<Col span={19}>

						<Main
							idx = {idx} />

						</Col>
					</Row>
				</div>
			</div>
		)
	}
}
