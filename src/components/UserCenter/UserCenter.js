/*2016 11.9 个人中心页面*/
import React, { Component, PropTypes } from 'react'
import {  Icon, Switch, Row, Col } from 'antd'
import *as styles from './UserCenter.css'
import CenterTitle from './CenterTitle'
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
			<div className={styles['font_fam']}>
				<Banner/>
					<div>
					<Row>
						<Col lg={4} md={4} sm={4} xs={4}>
			       	<MenuLeft />
			       </Col>
			      <Col lg={16} md={16} sm={16} xs={16}>	
			      	<CenterTitle titleStr={'用户信息'} />
			      	{children}
			      </Col>
		       </Row>
      	</div>
      </div>
    )
}
