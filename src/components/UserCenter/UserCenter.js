/*2016 11.9 个人中心页面*/
import React, { Component, PropTypes } from 'react'
import {  Icon, Switch, Row, Col } from 'antd'
import *as styles from './UserCenter.css'
import CenterTitle from './CenterTitle/index.js'
import AccounTinfo from './AccountInfo/AccountInfo.js'
import Banner from './Banner/Banner.js'
import MenuLeft from './Menu/index.js'
import Certification from './Certification/Certification.js'
import {
	Link,
	Router,
	Route,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router'
export default class UserCenter extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var _that=this
		return(
			<div>
				<Banner/>
					<div className={styles['out_wrap']}>
					<Row className={styles['left_wrap']}>
						<Col lg={4}>
			       	<MenuLeft />
			       </Col>
			      <Col lg={16}>	
			      	<CenterTitle titleStr={'用户信息'} />
			      	<Certification />
			      </Col>
		       </Row>
      	</div>
      </div>
    );
	}

}
