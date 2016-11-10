import React, { PropTypes, Component } from 'react'
import styles from './Navigator.css'
import { Row, Col, Icon, Button,Menu, Dropdown } from 'antd'
import {Link } from 'react-router'
import { domUtils } from '../../utils/utils'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

	let idx=0;
			
class Navigator extends Component {
	showNavbar(){
		let navbar = this.refs.navbar;
		idx++;
		(idx%2)!=0?domUtils.addClassName(navbar,styles.animate):domUtils.removeClassName(navbar,styles.animate)
	}
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
		      			<Icon type="caret-down" className={styles['caret_down']} />
		      		</span>}
		      		className={styles['centerMeu']+' '
		      		+styles['meu_t']+' '+styles.href}
		      		>
			          <Menu.Item key="setting:1">	
			          	<Link className={styles.href} 
			          		to="/usercenter/accountinfo">
			          		 账户信息
			          	</Link>
			          </Menu.Item>
			          <Menu.Item key="setting:2">
			           <Link to="usercenter/certification"> 
			           	实名认证
			           </Link>
			          </Menu.Item>
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
			<div>
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
						<Col xs={0} sm={0} md={3} lg={3} className={styles.menugroup}>

							<Menu mode="horizontal">
									<SubMenu title={<span><Link to="/documents" className={styles.href}>文档中心</Link><Icon type="down" className={styles.down} /></span>}>
					            <Menu.Item key="setting:1">彩票服务文档</Menu.Item>
					            <Menu.Item key="setting:2">竞猜游戏文档</Menu.Item>
					             <Menu.Item key="setting:3">数据资讯文档</Menu.Item>
					            <Menu.Item key="setting:4">其他文档</Menu.Item>
					        </SubMenu>
				        </Menu>
							
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup}>

							<Menu mode="horizontal">
								<SubMenu title={<span>技术支持</span>}>
				            <Menu.Item key="setting:1">购买技术支持</Menu.Item>
				            <Menu.Item key="setting:2">工单系统</Menu.Item>
				             <Menu.Item key="setting:3">Bug汇报</Menu.Item>
				        </SubMenu>
			        </Menu>
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
								<Icon type="bars" className={styles.bars} 
									onClick={()=>this.showNavbar()}/>
						</Col>
					</Row>
					<Row>
						<Col xs={24} sm={24} md={24} lg={24}>
							<div ref='navbar' className={styles.unanimate}>
								<p key="0"><a href="#">服务预算</a></p>
								<p key="1"><a href="#">文档中心</a></p>
								<p key="2"><a href="#">技术支持</a></p>
							</div>
						</Col>
					</Row>
				</header>
			</div>
		)
	}
}


export default Navigator
