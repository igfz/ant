import React, { PropTypes, Component } from 'react'
import styles from './Navigator.css'
import { Row, Col, Icon, Button,Menu, Dropdown } from 'antd'
import {Link } from 'react-router'
import utils from '../../utils'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e) {
  console.log('click', e);
}

const Sider = React.createClass({
  getInitialState() {
    return {
      current: '1',
      openKeys: [],
    };
  },
  handleClick(e) {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  },
  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  },
  getAncestorKeys(key) {
    const map = {
      sub2: ['sub1'],
    };
    return map[key] || [];
  },
  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{ width: 240 }}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>产品与服务</span></span>}>
          <Menu.Item key="1">彩票服务</Menu.Item>
          <Menu.Item key="2">竞猜游戏</Menu.Item>
          <SubMenu key="sub2" title="数据资讯">
          	<Menu.Item key="3">盘口赔率</Menu.Item>
            <Menu.Item key="4">战绩交锋</Menu.Item>
            <Menu.Item key="5">赛事排行</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>预算</span></span>}>
          <Menu.Item key="6">Option 5</Menu.Item>
          <Menu.Item key="7">Option 6</Menu.Item>
          <Menu.Item key="8">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>文档中心</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="setting" /><span>技术支持</span></span>}>
          <Menu.Item key="13">Option 9</Menu.Item>
          <Menu.Item key="14">Option 10</Menu.Item>
          <Menu.Item key="15">Option 11</Menu.Item>
          <Menu.Item key="16">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  },
});

class Navigator extends Component {
	showNavbar(){
		let navbar = this.refs.navbar;
		utils.myToggleClass(navbar,styles.dn)
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
			<div style={{ width:"100%",height:"100%" }}>
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
				</header>
				
				<div ref="navbar" className={styles.mnavbar+' '+styles.dn}>
					<Sider/>
					<Button type="ghost" className={styles.regBtn}>免费试用</Button>
				</div>

			</div>
		)
	}
}


export default Navigator
