import React, { Component, PropTypes } from 'react'
import styles from './Menu.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class Menu extends Component {

	shouldComponentUpdate (nextProps,nextState) {
		return this.props.idx != nextProps.idx
	}

	clickHandler(i){
		this.props.clickHandler(i)
	}

	render() {

  	let id = this.props.idx

		return (
			<ul className={styles.menu}>
				<li className={((id==0)&&styles.active)} onClick={()=>this.clickHandler(0)}><Link to="/product">产品详情</Link></li>
				<li className={((id==1)&&styles.active)} onClick={()=>this.clickHandler(1)}><Link to="/product">Demo演示</Link></li>
				<li className={((id==2)&&styles.active)} onClick={()=>this.clickHandler(2)}><Link to="/product">SDK下载</Link></li>
				<li className={((id==3)&&styles.active)} onClick={()=>this.clickHandler(3)}><Link to="/product">接口文档</Link></li>
			</ul>
		)
	}
}
