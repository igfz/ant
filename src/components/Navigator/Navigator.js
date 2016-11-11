import React, { PropTypes, Component } from 'react'
import styles from './Navigator.css'
import { Row, Col, Icon, Button,Menu, Dropdown } from 'antd'
import {Link } from 'react-router'
import utils from '../../utils'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

let idx=0;
		
function handleClick(e) {
  console.log('click', e);
}

class Navigator extends Component {
	showNavbar(){
		let navbar = this.refs.navbar;
		idx++;
		(idx%2)!=0?utils.addClassName(navbar,styles.animate):utils.removeClassName(navbar,styles.animate)
	}
	loginFlag(flag){
		if(flag){
			return(
				<Menu mode="horizontal">
					<SubMenu 
						className={styles.href+' '+styles['center_meu']}
							title={
								<span>
									<Icon type='user'/>
									章鱼1997
									<Icon type='caret-up'/>
								</span>}>
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
	            <Menu.Item key="setting:3">
	            	<Link to="/usercenter/costinfo"> 
			           		费用信息
			          </Link>
	            </Menu.Item>
	            <Menu.Item key="setting:4">
	            	<Link to="/usercenter/transactrecord"> 
			           		交易纪录
			          </Link>
	            </Menu.Item>
	            <Menu.Item key="setting:5"> 
	            	<Link to="/">
				          退出
				        </Link>
	            </Menu.Item>
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
						<Col xs={11} sm={5} md={5} lg={5} className={ styles.servertitle }>
							<Icon type="cloud-o" className={styles.cloud}/>
							<Link to="/" className={styles.href}>SAAS服务</Link>
						</Col>
						<Col xs={5} sm={15} md={0} lg={0}></Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup}>
							<Link to="/product" className={styles.href}>产品与服务</Link>
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup}>
							预算
						</Col>
						<Col xs={0} sm={0} md={3} lg={3} className={styles.menugroup}>

							<Menu mode="horizontal">
									<SubMenu title={<span><Link to="/documents" className={styles.defaulthref}>文档中心</Link><Icon type="down" className={styles.down} /></span>}>
					            <Menu.Item key="setting:1">彩票服务文档</Menu.Item>
					            <Menu.Item key="setting:2">竞猜游戏文档</Menu.Item>
					             <Menu.Item key="setting:3">数据资讯文档</Menu.Item>
					            <Menu.Item key="setting:4">其他文档</Menu.Item>
					        </SubMenu>
				        </Menu>
							
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup} >

							<Menu mode="horizontal">
								<SubMenu title={<span>技术支持</span>}>
				            <Menu.Item key="setting:1">购买技术支持</Menu.Item>
				            <Menu.Item key="setting:2">工单系统</Menu.Item>
				             <Menu.Item key="setting:3">Bug汇报</Menu.Item>
				        </SubMenu>
			        </Menu>
						</Col>

						<Col xs={0} sm={0} md={1} lg={1}></Col>
						<Col xs={0} sm={0} md={3} lg={3} className={styles.menugroup}>
							{this.loginFlag(true)}		
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}>
							<Button className={styles.btn}>
								<Link to="/application" className={styles.href}>
									免费试用
								</Link>
							</Button>
						</Col>
						<Col xs={8} sm={4} md={0} lg={0} className={ styles.mbars }>
								<span className={ styles.mlogin }>
									<Link to="/login" className={styles.defaulthref}>登录</Link>
								</span>|
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
