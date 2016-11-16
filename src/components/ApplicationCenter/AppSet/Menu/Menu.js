import React, { Component, PropTypes } from 'react'
import { Icon,Row,Col,Button } from 'antd'
import styles from './Menu.css'
import {Link } from 'react-router'
import utils from '../../../../utils'

let data=[
			{title:"基本信息",route:"/application/setting"},
			{title:"应用key",route:"/application/setting/key"},
			{title:"服务开关",route:"/application/setting/service"}
		]

export default class Menu extends Component {
	componentDidMount(){
		data.map(
			(items,index) => {
				if(window.location.hash.indexOf(items.route)!=-1){
					this.actRoute(this.refs["rt"+index],index,"flush")
				}
			}
	  )
	}

	constructor(props) {
		super(props)
		this.productRoute = this.productRoute.bind(this)
	}

	productRoute(items,index){
		return (
			<Link key={index} to={items.route}>
				<li ref={"rt"+index} onClick={(e,index)=>this.actRoute(e,index)} >{items.title}</li>
			</Link>
		)
	}

	actRoute(e,i,r){
		if(r=="flush"){
			let eSib=utils.siblings(e.parentNode)
			for(let x in eSib){
				utils.removeClassName(eSib[x].childNodes[0],styles.active)
			}
			utils.addClassName(e,styles.active)
		}else{
			let eSib=utils.siblings(e.target.parentNode)
			for(let x in eSib){
				utils.removeClassName(eSib[x].childNodes[0],styles.active)
			}
			utils.addClassName(e.target,styles.active)
		}
	}

	render() {
		
		const nodes = data.map(
			(items,index) => (
				this.productRoute(items,index)
			)
	  )
		return (
			<ul className={styles.menu}>
				{nodes}
			</ul>
		)
	}
}
