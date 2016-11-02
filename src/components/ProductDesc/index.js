import Banner from './Banner'
import Menu from './Menu'
import React, { Component, PropTypes } from 'react'
import { Icon,Row,Col,Button } from 'antd'


export default function ProductDesc({ children }) {
  return (
  	<div>

			<Banner />

			<div style={{'maxWidth':'1200px','minHeight':'1200px','margin':'3% auto'}}>
				<Row type="flex" justify="center">
					<Col xs={22} sm={22} md={5} lg={5}>

					<Menu />

					</Col>
					<Col xs={22} sm={22} md={19} lg={19}>

					{children}

					</Col>
				</Row>
			</div>
		</div>
  )
}
