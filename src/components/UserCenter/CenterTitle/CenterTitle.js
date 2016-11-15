import React, { Component, PropTypes } from 'react'
import {Row,Col } from 'antd'
import * as styles  from './CenterTitle.css'

export default class CenterTitle extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const { titleStr }=this.props
		return(
				<Row className={styles['centerTh']}>
							<Col lg={24} md={24} sm={24} xm={24}>
								<h2>{titleStr}</h2>
							</Col>
				</Row>
					)
	}
}