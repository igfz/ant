import React, { Component, PropTypes } from 'react'
import styles from './Banner.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class ProductDesc extends Component {

	constructor(props) {
		super(props)
		this.getUrlParam = this.getUrlParam.bind(this)
	}

	getUrlParam(name){
		var serch =window.location.hash.split('?')[1]
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = serch.match(reg);
    if (r != null) return unescape(r[2]);
    return null;
	}

	renderItems(items,index){
		return(
      <p key = {index}>
	      <span className={styles.losange}></span>
	      {items}
			</p>
		)
	}

	render() {

  	let data = {
		  "jczlq": [
		    {
		      "icon": "jczlq",
		      "title": "竞彩足篮球",
		      "desc": ["每日更新未来足篮球赛程","支持5种竞彩足球玩法：胜平负、让球胜平负、比分、总进球数、半全场","支持4种竞彩篮球玩法：胜负、让分胜负、大小分、胜分差","玩法固定奖金即时更新"]
		    }
		  ],
		  "ctzc": [
		  	{
		      "icon": "ctzc",
		      "title": "传统足彩",
		      "desc": ["期次场次根据中国体彩官方及时更新，分当前期和预售期两种类型","支持4种传统足彩玩法：十四场胜负、任选九场、四场进球数、六场半全场","开奖信息包含：即时奖池、历史期奖级、奖金、注数等"]
		    }
		  ],
		  "bjdc": [
		  	{
		      "icon": "bjdc",
		      "title": "北京单场",
		      "desc": ["每期结束及时更新下期赛程","支持6种北京单场玩法：胜平负、胜负过关、比分、总进球数、半全场、上下单双","浮动SP值、开奖SP值即时更新"]
		    }
		  ],
		  "dlt": [
		  	{
		      "icon": "dlt",
		      "title": "大乐透",
		      "desc": ["近百种足篮赛事赛程","足球拥有13种赛前玩法，19种赛中玩法","玩法赔率即时更新"]
		    }
		  ],
		  "zlqjc": [
		  	{
		      "icon": "zlqjc",
		      "title": "足篮球竞猜",
		      "desc": ["近百种足篮赛事赛程","足球拥有13种赛前玩法，19种赛中玩法","玩法赔率即时更新"]
		    }
		  ],
		  "djjc": [
		  	{
		      "icon": "djjc",
		      "title": "电竞竞猜",
		      "desc": ["涵盖Dota、英雄联盟、守望先锋、FiFA Online等主流电竞赛事","玩法种类丰富","玩法赔率即时更新"]
		    }
		  ],
		  "sjjc": [
		  	{
		      "icon": "sjjc",
		      "title": "事件竞猜",
		      "desc": ["随心所欲定制趣味事件竞猜","赔率数据实时支持","操盘模型保驾护航"]
		    }
		  ],
		  "xdgn": [
		  	{
		      "icon": "xdgn",
		      "title": "下单功能",
		      "desc": ["近百种足篮赛事赛程","足球拥有13种赛前玩法，19种赛中玩法","玩法赔率即时更新"]
		    }
		  ],
		  "plpk": [
		  	{
		      "icon": "plpk",
		      "title": "赔率盘口",
		      "desc": ["涵盖Bet365、平博、利记等60多家博彩公司赔率数据","以欧盘、亚盘、大小球玩法为主"," 赔率即时更新","覆盖竞彩足球、北京单场的足球赛事"]
		    }
		  ],
		  "zjjf": [
		  	{
		      "icon": "zjjf",
		      "title": "战绩交锋",
		      "desc": ["支持球队过去10年历史战绩、交锋战绩查询","支持球队本赛季内所有未来赛事查询","覆盖竞彩足球、北京单场玩法的足球赛事"]
		    }
		  ],
		  "ssph": [
		  	{
		      "icon": "ssph",
		      "title": "赛事排行",
		      "desc": ["榜单随比赛进行实时更新","积分榜包含：轮次、积分、胜平负数量、进球、失球、净胜球","射手榜包含：球员信息、进球数量、普通进球、点球","覆盖竞彩足球、北京单场玩法的足球赛事"]
		    }
		  ],
		  "cczr": [
		  	{
		      "icon": "cczr",
		      "title": "出场阵容",
		      "desc": ["赛前1小时更新比赛阵容阵型信息","包含首发阵容、阵型、球员具体位置，替补阵容、教练等信息"]
		    }
		  ],
		  "bfzb": [
		  	{
		      "icon": "bfzb",
		      "title": "比分直播",
		      "desc": ["足球赛事拥有8种比赛状态，7种场中事件","篮球赛事拥有5中比赛状态，以及各阶段比分"," 覆盖竞彩足球、竞彩篮球、北京单场的足篮赛事"]
		    }
		  ],
		  "zybl": [
		  	{
		      "icon": "zybl",
		      "title": "章鱼爆料",
		      "desc": ["独家原创","涵盖伤病、停赛、阵容、状态、场地等16种角度爆料"," 覆盖所有竞彩足球赛事"]
		    }
		  ],
		  "fxstj": [
		  	{
		      "icon": "fxstj",
		      "title": "分析师推荐",
		      "desc": ["近百种足篮赛事赛程","足球拥有13种赛前玩法，19种赛中玩法","足球拥有10种赛前玩法，17种赛中玩法","玩法赔率即时更新"]
		    }
		  ],
		  "qtgn": [
		  	{
		      "icon": "qtgn",
		      "title": "其他功能",
		      "desc": ["每日针对竞彩足球赛事，提供约10场比赛分析预测","推荐以竞彩足球胜平负、让球胜平负玩法为基础"]
		    }
		  ]
		}

		let key = this.getUrlParam('type')

		const nodes = data[key][0].desc.map(
			(items,index) => (
				this.renderItems(items,index)
			)
	  )

		return (
			<div className={styles.top}>
				<div className={styles.bannerBox}>
					<div className={styles.item}>
						<Row  className={styles.banner}>
							<Col xs={21} sm={21} md={14} lg={14} push = {1}>
								<h3>{data[key][0].title}</h3>
								{nodes}
								<Button type="primary">
									<Link to="/application/freeuse">立即试用</Link>
								</Button>
							</Col>
							<Col xs={0} sm={0} md={10} lg={10} pull={1}>
								<div className={styles.img+' '+styles[data[key][0].icon]}></div>
							</Col>
						</Row>
					</div>
				</div>
			</div>	
		)
	}
}
