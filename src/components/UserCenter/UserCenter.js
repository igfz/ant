/*2016 11.9 个人中心页面*/
import React, { Component, PropTypes } from 'react'
import { Menu, Icon, Switch, Row, Col } from 'antd'
import *as styles from './UserCenter.css'
import CenterTitle from './CenterTitle/index.js'
import AccounTinfo from './AccountInfo/AccountInfo.js'
const SubMenu = Menu.SubMenu;
export default class UserCenter extends Component{
	constructor(props){
		super(props);
		this.state={
			current:'1',
		}
	}

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    })
  }
	render(){
		var _that=this
		return(
			<div className={styles['out_wrap']}>
				<Row className={styles['left_wrap']}>
					<Col lg={4}>
		        <Menu theme={this.state.theme}
		          onClick={this.handleClick}
		          style={{ width: 160 }}
		          defaultOpenKeys={['sub1']}
		          selectedKeys={[_that.state.current]}
		          mode="inline"
		        >
		          <SubMenu key="sub1" >
		            <Menu.Item key="1"> 账户信息</Menu.Item>
		            <Menu.Item key="2"> 实名认证</Menu.Item>
		            <Menu.Item key="3"> 费用信息</Menu.Item>
		            <Menu.Item key="4"> 交易纪录</Menu.Item>
		            <Menu.Item key="5"> 退出</Menu.Item>
		          </SubMenu>
		        </Menu>
		       </Col>
		      <Col lg={16}>	
		      	<CenterTitle titleStr={'用户信息'} />
		      	<AccounTinfo />
		      </Col>
	       </Row>
      </div>
    );
	}

}
