import React, { PropTypes, Component } from 'react'
import styles from './Navigator.css'
import { Row, Col, Icon, Button,Menu, Dropdown } from 'antd'
import {Link } from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menu = (
		<Menu>
			<Menu.Item key="0"><a href="#">服务预算</a></Menu.Item>
			<Menu.Divider />
			<Menu.Item key="1"><a href="#">文档中心</a></Menu.Item>
			<Menu.Divider />
			<Menu.Item key="2"><a href="#">技术支持</a></Menu.Item>
		</Menu>
	);

			

class Navigator extends Component {
	loginFlag(flag){
		if(flag){
			return(
				<Menu 
					className={styles['outMeu']+' '+styles['ml10']}
					mode="horizontal">
		      <SubMenu 
		      	title={
		      		<span><Icon type="user"/>
		      			章鱼1997
		      		</span>}
		      		className={styles['centerMeu']+' '
		      		+styles['meu_t']+' '+styles.href}
		      		>
			          <Menu.Item key="setting:1"> 账户信息</Menu.Item>
			          <Menu.Item key="setting:2"> 实名认证</Menu.Item>
			          <Menu.Item key="setting:3"> 费用信息</Menu.Item>
			          <Menu.Item key="setting:4"> 交易纪录</Menu.Item>
			          <Menu.Item key="setting:5"> 退出</Menu.Item>
		      </SubMenu>
		    </Menu>
				)
		}
		return(
			<Link to="/login" className={styles.href}>登录</Link>|
			<Link to="/join" className={styles.href}>注册</Link>
			)
	}

	render() {

		return (
			<header>
				<Row type="flex" className={styles.row}>
					<Col xs={11} sm={11} md={5} lg={5}>
						<Icon type="cloud-o" className={styles.cloud}/>
						<Link to="/" className={styles.href}>SAAS服务</Link>
					</Col>
					<Col xs={9} sm={9} md={0} lg={0}></Col>
					<Col xs={0} sm={0} md={3} lg={3} className={styles.hover}>
						服务预算
					</Col>
					<Col xs={0} sm={0} md={3} lg={3} className={styles.hover}>
						<Link to="/documents" className={styles.href}>文档中心</Link>
						<Icon type="down" className={styles.down} />
					</Col>
					<Col xs={0} sm={0} md={3} lg={3} className={styles.hover}>
						技术支持
					</Col>
					<Col xs={0} sm={0} md={4} lg={4}></Col>
					<Col xs={0} sm={0} md={3} lg={3}>
						{this.loginFlag(true)}		
					</Col>
					<Col xs={0} sm={0} md={3} lg={3}>
						<Button className={styles.btn}>
							<Link to="/application" className={styles.href}>
								免费试用
							</Link>
						</Button>
					</Col>
					<Col xs={4} sm={4} md={0} lg={0}>
						<Dropdown overlay={menu} trigger={['click']}>
								<Icon type="bars" className={styles.bars} />
						</Dropdown>
					</Col>
				</Row>
			</header>
		)
	}
}


export default Navigator
