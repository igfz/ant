/*2016 11.9 个人中心页面*/
import React, { Component, PropTypes } from 'react'
import {  Icon, Switch, Row, Col } from 'antd'
import *as styles from './UserCenter.css'
import AccounTinfo from './AccountInfo'
import Banner from './Banner'
import MenuLeft from './Menu'
import Certification from './Certification/Certification.js'
import CertifiCompany from './Certification'
import CostInfo from './CostInfo'
import TransactRecord from './TransactRecord'
import { PaySuccess, Reccharge} from './AccountInfo/Recharge'
  
import {
	Link,
	Router,
	Route,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router'
export default function UserCenter({ children }){
		return(
			<div>

			<Banner />

			<div className={styles['ctr_style']} >
				<Row type="flex" justify="center">
					<Col xs={22} sm={22} md={5} lg={5}>

					<MenuLeft />

					</Col>
					<Col xs={22} sm={22} md={19} lg={19} 
					 className={styles['wrap_out']}>

					{children}

					</Col>
				</Row>
			</div>
		</div>
			
    )
}
