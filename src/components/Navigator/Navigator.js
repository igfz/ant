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
					"route":"",
					"data":[
						{
							"id":"2",
							"title":"彩票服务",
							"data":[
								{
									"key":"1",
									"title":"竞彩足篮球",
									"describe":"提供竞彩足篮球的全部赛程和固定奖金服务，玩法全面",
									"route":"/product?type=jczlq"
								},
								{
									"key":"2",
									"title":"传统足彩",
									"describe":"提供传统足彩的所有期次赛程和开奖信息服务，玩法全面",
									"route":"/product?type=ctzc"
								},
								{
									"key":"3",
									"title":"北京单场",
									"describe":"提供北京单场的所有期次赛程、浮动SP值和开奖SP值服务，玩法全面",
									"route":"/product?type=bjdc"
								}
							]
						},
						{
							"id":"3",
							"title":"竞猜游戏",
							"data":[
								{
									"key":"4",
									"title":"足篮球竞猜",
									"describe":"提供实时的足篮球赛前盘/滚球盘的赛程、赔率和操盘服务",
									"route":"/product?type=zlqjc"
								},
								{
									"key":"5",
									"title":"电竞竞猜",
									"describe":"提供实时电子竞技赛前盘/滚球盘的赛程、赔率和操盘服务",
									"route":"/product?type=djjc"
								},
								{
									"key":"6",
									"title":"事件竞猜",
									"describe":"提供多种事件竞猜的赔率和操盘服务，事件也可由用户定制",
									"route":"/product?type=sjjc"
								}
							]
						},
						{
							"id":"4",
							"title":"数据资讯",
							"data":[
								{
									"key":"7",
									"title":"赔率盘口",
									"describe":"多家国外顶尖博彩公司实时赔率盘口汇总，先人一步拿到最新动态",
									"route":"/product?type=plpk"
								},
								{
									"key":"8",
									"title":"战绩交锋",
									"describe":"球队历史战绩、交锋战绩、未来赛程安排一览无余",
									"route":"/product?type=zjjf"
								},
								{
									"key":"9",
									"title":"赛事排行",
									"describe":"赛事排行榜、积分榜，更新及时数据准确",
									"route":"/product?type=ssph"
								},
								{
									"key":"10",
									"title":"出场阵容",
									"describe":"首发阵容、阵型消息及时准确",
									"route":"/product?type=cczr"
								},
								{
									"key":"11",
									"title":"比分直播",
									"describe":"比分、时间、场中事件直播，比视频更快更准",
									"route":"/product?type=bfzb"
								},
								{
									"key":"12",
									"title":"章鱼爆料",
									"describe":"最及时的独家原创爆料新闻，多角度深层次解析球赛",
									"route":"/product?type=zybl"
								},
								{
									"key":"13",
									"title":"分析师推荐",
									"describe":"近20位分析师，每日提供客观细致的赛前预测",
									"route":"/product?type=fxstj"
								}
							]
						}
					]
				},
				{
					"id":"5",
					"title":"预算",
					"icon":"appstore",
					"special":"0",
					"route":"/budget",
					"data":[]
				},
				{
					"id":"6",
					"title":"文档中心",
					"icon":"setting",
					"special":"0",
					"route":"/documents",
					"data":[
						{
							"key":"14",
							"title":"彩票服务文档",
							"route":"/documents/detail?lottery=1"
						},
						{
							"key":"15",
							"title":"竞猜游戏文档",
							"route":"/documents/detail?game=1"
						},
						{
							"key":"16",
							"title":"数据资讯文档",
							"route":"/documents/detail?message=1"
						},
						{
							"key":"17",
							"title":"其他文档",
							"route":"/documents/detail?rests=1"
						}
					]
				},
				{
					"id":"7",
					"title":"技术支持",
					"icon":"setting",
					"special":"0",
					"route":"",
					"data":[
						{
							"key":"18",
							"title":"购买技术支持",
							"route":""
						},
						{
							"key":"19",
							"title":"工单系统",
							"route":""
						},
						{
							"key":"20",
							"title":"Bug汇报",
							"route":""
						}
					]
				}
			]
		           		           		        
const userData={
	 				"id":"1",
					"title":"章鱼彩票889",
					"icon":"user",
					"special":"0",
					"route":"",
					"data":[
						{
							"key":"2",
							"title":"账户信息",
							"route":"/usercenter/accountinfo"
							},
							{
							"key":"3",
							"title":"实名认证",
							"route":"/usercenter/certification"
							},
							{
							"key":"4",
							"title":"费用信息",
							"route":"/usercenter/costinfo"
							},
							{
							"key":"5",
							"title":"交易记录",
							"route":"/usercenter/transactrecord"
							},
							{
							"key":"5",
							"title":"退出",
							"route":"/login"
							}
					]
}
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
    //移动端路由关闭导航
		let navbar = document.getElementById("navbar")
		let body=document.getElementsByTagName("body")[0]
	 	utils.addClassName(navbar,styles.dn)
		utils.removeClassName(body,styles.pf)
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
  renderNavServers(x){
		if(x==0){
			return (
				<SubMenu key={"sub"+data[x].id} title={
					<span>
						
						<span>{data[x].title}</span>
					</span>}>
        	{
        		data[0]["data"].map((list,i)=>
      				<SubMenu key={"sub"+list.id} title={list.title}>
		          	{list["data"].map((item,idx)=>
		      				<Menu.Item key={item.key}>
		      					<Link to={item.route} className={styles.href}>{item.title}</Link>
	      					</Menu.Item>
								)}
		          </SubMenu>
						)
					}
        </SubMenu>
			)
		}else{
	  	if(data[x]["data"].length>0){
				return (
					<SubMenu key={"sub"+data[x].id} title={<span>

						<span>{data[x].title}</span>
					</span>}>
						{data[x]["data"].map((item,idx)=>
							<Menu.Item key={"setting:"+idx}>
									<Link to={item.route} className={styles.href}>{item.title}</Link>
							</Menu.Item>
						)}
					</SubMenu>
				)
			}else{
				return (
					<SubMenu className={styles.iconnone} key={"sub"+data[x].id} title={<span>
						
						<span>{data[x].title}</span>
					</span>}>
					</SubMenu>
				)
			}
		}

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
	        {this.renderNavServers(0)}
	        {this.renderNavServers(1)}
	        {this.renderNavServers(2)}
	        {this.renderNavServers(3)}
	        
	      </Menu>
	      <Button type="ghost" className={styles.regBtn} onClick={this.handleClick}>免费试用</Button>
      </div>
    );
  },
});
class UserSider extends Component{
	constructor(props){
		super(props);
		this.state={
		 current: '1',
     openKeys: []
		}
		this.handleClick=this.handleClick.bind(this);
		this.renderNavServers=this.renderNavServers.bind(this);
	}

	handleClick(e) {
    //移动端路由关闭导航
		let navbar = document.getElementById("usernavbar")
		let body=document.getElementsByTagName("body")[0]
	 	utils.addClassName(navbar,styles.dn)
		utils.removeClassName(body,styles.pf)
    this.setState({ current: e.key });
  }
  renderNavServers(x){
		if(true){
			return (
				userData&&userData.data.map((item,index)=>{
					return(
						<SubMenu className={styles.iconnone}
						 key={"sub"+index} title={<span>
							<Link to={item.route} 
								onClick={this.handleClick}>
	    					<span className={styles['link_meb']}>
	    						{item.title}
	    					</span>
	    				</Link>
					</span>}>
					</SubMenu>
						)
				})
			)
		}
	}
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
	        {this.renderNavServers(0)}
	      </Menu>
	      <Button type="ghost" className={styles.regBtn} onClick={this.handleClick}>免费试用</Button>
      </div>
    );
  }
}


class Navigator extends Component {
	constructor(props){
		super(props);
		this.showUserNt=this.showUserNt.bind(this);
	}
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
		let navbar = this.refs.navbar,
				usernavbar = this.refs.usernavbar;
		utils.myToggleClass(navbar,styles.dn)
		let body=document.getElementsByTagName("body")[0]
		if(navbar.className.indexOf("dn")!=-1){
			utils.removeClassName(body,styles.pf)
		}else{
			utils.addClassName(usernavbar,styles.dn)
			utils.addClassName(body,styles.pf)
		}
	}
  showUserNt(){
  	let navbar = this.refs.navbar,
				usernavbar = this.refs.usernavbar;
		utils.myToggleClass(usernavbar,styles.dn)
		let body=document.getElementsByTagName("body")[0]
		if(navbar.className.indexOf("dn")!=-1){
			utils.removeClassName(body,styles.pf)
		}else{
			utils.addClassName(navbar,styles.dn)
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
											<Icon type='user' className={styles.usericon}/>{userData.title}
											<Icon className={styles['arrow_h']} 
												type='caret-down'/>
										</Link>
										</span>}>
										{
											userData&&userData.data.map((item,index)=>{
												return(
													<Menu.Item key={'settinf:'+index}>
							            <Link to={item.route} 
							            	className={styles.defaulthref}>
							            		<span>{item.title}</span>
							            </Link>
							           </Menu.Item>
													)
											})
										}
		        </SubMenu>
	        </Menu>
			)
		}
		return(
			<Link to="/login" className={styles.href}>登录</Link>|
			<Link to="/join" className={styles.href}>注册</Link>
			)
	}

	renderNavServes(x){
		if(x==0){
			return (
				<Menu onClick={handleClick} style={{ width: 200 }} mode="vertical">
					{data[x]["data"].map((item,idx)=>
						<SubMenu key={"sub"+idx} title={<span>{item.title}</span>}>
							{item["data"].map((items,idxs)=>
					        <Menu.Item key={items.key}>
					        	<h4 className={styles.navitems}>
					        		<Link to={items.route} className={styles.href}>{items.title}</Link>
					        	</h4>
					        	{items.describe}
					        </Menu.Item>
		        	)}
				    </SubMenu>
					)}
				</Menu>
			)
		}else{
			if(data[x]["data"].length>0){
				return (
					<Menu mode="horizontal">
							<SubMenu key={data[x].id} title={<span>
								{data[x].route!=""?(<Link to={data[x].route} className={styles.navhref}>{data[x].title}</Link>):(<Link className={styles.navhref}>{data[x].title}</Link>)}</span>}>
								{data[x]["data"].map((item,idx)=>
									<Menu.Item key={"setting:"+idx}>
										<Link to={item.route} className={styles.href}>
											<span>{item.title}</span>
										</Link>
									</Menu.Item>
								)}
							</SubMenu>
		      </Menu>
				)
			}else{
				return (
					<Menu mode="horizontal">
							<SubMenu key={data[x].id} title={<span>
								{data[x].route!=""?(<Link to={data[x].route} className={styles.navhref}>{data[x].title}</Link>):(<Link className={styles.navhref}>{data[x].title}</Link>)}</span>}>
							</SubMenu>
		      </Menu>
				)
			}
		}

	}

	render() {
		let user="true"
		return (
			<div style={{ width:"100%",height:"100%" }}>
				<header>
					<Row type="flex" className={styles.row}>
						<Col xs={11} sm={5} md={5} lg={5} className={ styles.servertitle }>
							<Link to="/" className={styles.href}>
								<span className={styles.logo}></span>
							</Link>
						</Col>
						<Col xs={5} sm={15} md={0} lg={0}></Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup+' '+styles.serverwp}>
							<Menu mode="horizontal">
								<SubMenu title={<Link className={styles.navhref}><span>
									{data[0].title}</span></Link>}>
			            <div className={styles.menuserver} >
			            	{this.renderNavServes(0)}
			            </div>
				        </SubMenu>
			        </Menu>
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup+' '+styles.menupub}>
							{this.renderNavServes(1)}
						</Col>
						<Col xs={0} sm={0} md={3} lg={3} className={styles.menugroup+' '+styles.menupub}>
							{this.renderNavServes(2)}
						</Col>
						<Col xs={0} sm={0} md={3} lg={3}  className={styles.menugroup+' '+styles.menupub} >
							{this.renderNavServes(3)}
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
									{user?<Icon type="user" className={styles.usericon}
									 onClick={this.showUserNt}/>:<Link to="/login" className={styles.defaulthref}>登录</Link>}
								</span>|
								<Icon type="bars" className={styles.bars} 
									onClick={()=>this.showNavbar()}/>
						</Col>
					</Row>
				</header>
				
				<div id="navbar" ref="navbar" className={styles.dn}>
					<Sider/>
				</div>

				<div id="usernavbar" ref="usernavbar" className={styles.dn}>
					<UserSider/>
				</div>

			</div>
		)
	}
}


export default Navigator
