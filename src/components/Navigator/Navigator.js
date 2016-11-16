import React, { PropTypes, Component } from 'react'
import styles from './Navigator.css'
import { Row, Col, Icon, Button,Menu, Dropdown } from 'antd'
import {Link } from 'react-router'
import utils from '../../utils'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const data=[
				{
					"id":"1",
					"title":"产品与服务",
					"icon":"mail",
					"special":"1",
					"data":[
						{
							"id":"2",
							"title":"彩票服务",
							"data":[
								{
									"key":"1",
									"title":"彩票服务",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿实时赔率盘口总汇，先人一步拿到最新动态",
									"route":"/documents/detail"
								},
								{
									"key":"2",
									"title":"赔率",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇",
									"route":"/documents/detail"
								},
								{
									"key":"3",
									"title":"彩票服务3",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国汇，先人一步拿到最新动态",
									"route":"/documents/detail"
								}
							]
						},
						{
							"id":"3",
							"title":"竞猜游戏",
							"data":[
								{
									"key":"4",
									"title":"彩票服务",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿实时赔率盘口总汇，先人一步拿到最新动态",
									"route":"/documents/detail"
								},
								{
									"key":"5",
									"title":"彩票服务1",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇",
									"route":"/documents/detail"
								},
								{
									"key":"6",
									"title":"彩票服务3",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国汇，先人一步拿到最新动态",
									"route":"/documents/detail"
								}
							]
						},
						{
							"id":"4",
							"title":"数据资讯",
							"data":[
								{
									"key":"7",
									"title":"彩票服务",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿实时赔率盘口总汇，先人一步拿到最新动态",
									"route":"/documents/detail"
								},
								{
									"key":"8",
									"title":"彩票服务1",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇",
									"route":"/documents/detail"
								},
								{
									"key":"9",
									"title":"彩票服务2",
									"describe":"多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国家顶尖博彩公司实时赔率盘口总汇，先人一步拿到最新动态多国汇，先人一步拿到最新动态",
									"route":"/documents/detail"
								}
							]
						}
					]
				}
			]

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
      sub3: ['sub1'],
      sub4: ['sub1']
    };
    return map[key] || [];
  },
  
  render() {
    return (
    	<div className={styles.mnavbar}>
	      <Menu
	        mode="inline"
	        openKeys={this.state.openKeys}
	        selectedKeys={[this.state.current]}
	        style={{ width: 240 }}
	        onOpenChange={this.onOpenChange}
	        onClick={this.handleClick}
	      >
	        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>产品与服务</span></span>}>
	        	{
	        		data[0]["data"].map((list,i)=>
	      				<SubMenu key={"sub"+list.id} title={list.title}>
			          	{list["data"].map((item,idx)=>
			      				<Menu.Item key={item.key}>{item.title}</Menu.Item>
									)}
			          </SubMenu>
							)
						}
	        </SubMenu>
	        <SubMenu key="sub5" title={<span><Icon type="appstore" /><span >预算</span></span>}>
	        	<Menu.Item key="10">Option 10</Menu.Item>
	          <Menu.Item key="11">Option 11</Menu.Item>
	          <Menu.Item key="12">Option 12</Menu.Item>
	        </SubMenu>
	        <SubMenu key="sub6" title={<span><Icon type="setting" /><span>文档中心</span></span>}>
           	<Menu.Item key="13">Option 9</Menu.Item>
	          <Menu.Item key="14">Option 10</Menu.Item>
	          <Menu.Item key="15">Option 11</Menu.Item>
	          <Menu.Item key="16">Option 12</Menu.Item>
	        </SubMenu>
	        <SubMenu key="sub7" title={<span><Icon type="setting" /><span>技术支持</span></span>}>
	          <Menu.Item key="17">Option 6</Menu.Item>
	          <Menu.Item key="18">Option 6</Menu.Item>
	        </SubMenu>
	      </Menu>
	      <Button type="ghost" className={styles.regBtn}>免费试用</Button>
      </div>
    );
  },
});

class Navigator extends Component {
	componentDidMount(){
		//移动端路由关闭导航
		let navbar = this.refs.navbar;
		let body=document.getElementsByTagName("body")[0]
		let Oas=document.getElementsByTagName("a")
		for(let i=0;i<Oas.length;i++){
			 Oas[i].addEventListener("click", function(){
			 	utils.addClassName(navbar,styles.dn)
				utils.removeClassName(body,styles.pf)
			 });
		}
	}

	showNavbar(){
		let navbar = this.refs.navbar;
		utils.myToggleClass(navbar,styles.dn)
		let body=document.getElementsByTagName("body")[0]
		if(navbar.className.indexOf("dn")!=-1){
			utils.removeClassName(body,styles.pf)
		}else{
			utils.addClassName(body,styles.pf)
		}
	}

	loginFlag(flag){
		if(flag){
			return(
					<Menu mode="horizontal" className={styles['center_meu']}>
									<SubMenu 
										title={<span>
										<Link 	className={styles.navhref}>
											<Icon type='user'/>章鱼1997<Icon type='caret-up'/>
										</Link>
										</span>}>
		            <Menu.Item key="setting:1">
			            <Link to="/usercenter/accountinfo" className={styles.defaulthref}>
			            		<span>账户信息</span>
			            </Link>
			           </Menu.Item>
		            <Menu.Item key="setting:2">
			            <Link to="/usercenter/certification" 
			            	className={styles.defaulthref}>
			            	实名认证
			            </Link>
		            </Menu.Item>
		            <Menu.Item key="setting:3">
			             <Link to="/usercenter/costinfo" 
			             	className={styles.defaulthref}>
			             		费用信息
			             </Link>
		             </Menu.Item>
		            <Menu.Item key="setting:4">
			            <Link to="/usercenter/transactrecord" 
			            	className={styles.defaulthref}>
			            		交易纪录
			            </Link>
		            </Menu.Item>
		            <Menu.Item key="setting:5">
			            <Link to="/login" className={styles.defaulthref}>
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

	renderNavServes(){
		return (
			<Menu onClick={handleClick} style={{ width: 200 }} mode="vertical">
				{data[0]["data"].map((item,idx)=>
						<SubMenu key={"sub"+idx} title={<span>{item.title}</span>}>
							{item["data"].map((items,idxs)=>
					        <Menu.Item key={items.key}>
					        	<h4 className={styles.navitems}>
					        		<Link className={styles.href}>{items.title}</Link>
					        	</h4>
					        	{items.describe}
					        </Menu.Item>
		        	)}
				    </SubMenu>
					)}
				</Menu>
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
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup+' '+styles.serverwp}>
							<Menu mode="horizontal">
								<SubMenu title={<Link className={styles.navhref}><span>
									{data[0].title}</span></Link>}>
			            <div className={styles.menuserver} >
			            	{this.renderNavServes()}
			            </div>
				        </SubMenu>
			        </Menu>
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup+' '+styles.menupub}>
							<Menu mode="horizontal">
								<SubMenu key="sub3" title={<span><Link className={styles.navhref}>预算</Link></span>}>
								</SubMenu>
							</Menu>
						</Col>
						<Col xs={0} sm={0} md={3} lg={3} className={styles.menugroup+' '+styles.menupub}>

							<Menu mode="horizontal">
									<SubMenu title={<Link to="/documents" className={styles.navhref}><span>文档中心</span></Link>}>
					            <Menu.Item key="setting:1"><Link to="/documents/detail" className={styles.defaulthref}><span>彩票服务文档</span></Link></Menu.Item>
					            <Menu.Item key="setting:2"><Link to="/documents/detail" className={styles.defaulthref}>竞猜游戏文档</Link></Menu.Item>
					             <Menu.Item key="setting:3"><Link to="/documents/detail" className={styles.defaulthref}>数据资讯文档</Link></Menu.Item>
					            <Menu.Item key="setting:4"><Link to="/documents/detail" className={styles.defaulthref}>其他文档</Link></Menu.Item>
					        </SubMenu>
				        </Menu>
							
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup+' '+styles.menupub} >

							<Menu mode="horizontal">
								<SubMenu title={<span><Link className={styles.navhref}>技术支持</Link></span>}>
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
				
				<div ref="navbar" className={styles.dn}>
					<Sider/>
				</div>

			</div>
		)
	}
}


export default Navigator
