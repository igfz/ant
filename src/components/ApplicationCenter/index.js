import Banner from './Banner'
import React, { Component, PropTypes } from 'react'
import { Icon,Row,Col,Button } from 'antd'


export default function ProductDesc({ children }) {
  return (
  	<div>

			<Banner />

			<div style={{'maxWidth':'1200px','minHeight':'1200px','margin':'55px auto'}}>

				{children}
				
			</div>
		</div>
  )
}
