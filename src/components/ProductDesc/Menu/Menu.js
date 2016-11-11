import React, { Component, PropTypes } from 'react'
import styles from './Menu.css'
import { Icon,Row,Col,Button } from 'antd'
import {browserHistory} from 'react-router'
import utils from '../../../utils'
import {Link } from 'react-router'

let data=[
			{title:"产品详情",route:"/product"},
			{title:"Demo演示",route:"product/demo"},
			{title:"SDK下载",route:"/product/sdk"},
			{title:"接口文档",route:"/product/document"}
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
