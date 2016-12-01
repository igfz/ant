import React, { Component } from 'react'
import { Row, Col,Button } from 'antd'
import styles from './Biz.css'
import {Link } from 'react-router'

export default class Biz extends Component {

	constructor(props) {
		super(props)
		this.renderItems = this.renderItems.bind(this)
	}

	shouldComponentUpdate (nextProps,nextState) {
		return this.props.idx != nextProps.idx
	}

	clickHandler(i){
		this.props.clickHandler(i)
	}

	renderItems(items,index){
		return(
      <Col xs={24} sm={24} md={6} lg={6}  className={styles.featureIteam} key = {index}>
	      <div className = {styles.icon+' '+styles[items.icon]}>
      	</div>
        <h2>{items.title}</h2>
        <p>{items.desc}</p>

        <Row type="flex" justify="space-between" className={styles.buttonBoxO}>
        	<Col span={11}>
          	<Button size="large" type="ghost">
          		<Link to={items.detail}>产品详情</Link>
          	</Button>
          </Col>
          <Col span={2}>
          </Col>
          <Col span={11}>
          	<Button size="large" type="ghost">
          		<Link to={items.demo}>Demo</Link>
          	</Button>
          </Col>
        </Row>

        <div className = {styles.detail}>
          <h3>{items.subtitle}</h3>
          <p>支持平台：{items.platform}</p>
          <p>采用技术：{items.tech}</p>
          <Row type="flex" justify="space-between" className={styles.buttonBoxI}>
          	<Col span={11}>
            	<Button type="primary">
            		<Link to={items.detail}>产品详情</Link>
            	</Button>
            </Col>
            <Col span={11}>
            	<Button type="primary">
            		<Link to={items.demo}>Demo</Link>
            	</Button>
            </Col>
          </Row>
        </div>
      </Col>
		)
	}

  render() {
  	let id = this.props.idx
  	let data = {
		  "0": [
		    {
		      "icon": "jczlq",
		      "title": "竞彩足篮球",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=jczlq",
		      "demo": "/product/demo?type=jczlq"
		    },
		    {
		      "icon": "ctzc",
		      "title": "传统足彩",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=ctzc",
		      "demo": "/product/demo?type=ctzc"
		    },
		    {
		      "icon": "bjdc",
		      "title": "北京单场",
		      "desc": "提供北京单场的所有期次赛程、浮动SP值和开奖SP值服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=bjdc",
		      "demo": "/product/demo?type=bjdc"
		    },
		    {
		      "icon": "dlt",
		      "title": "大乐透",
		      "desc": "即将上线",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=dlt",
		      "demo": "/product/demo?type=dlt"
		    }
		  ],
		  "1": [
		    {
		      "icon": "zlqjc",
		      "title": "足篮球竞猜",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=zlqjc",
		      "demo": "/product/demo?type=zlqjc"
		    },
		    {
		      "icon": "djjc",
		      "title": "电竞竞猜",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=djjc",
		      "demo": "/product/demo?type=djjc"
		    },
		    {
		      "icon": "sjjc",
		      "title": "事件竞猜",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=sjjc",
		      "demo": "/product/demo?type=sjjc"
		    },
		    {
		      "icon": "xdgn",
		      "title": "下单功能",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=xdgn",
		      "demo": "/product/demo?type=xdgn"
		    }
		  ],
		  "2": [
		    {
		      "icon": "plpk",
		      "title": "赔率盘口",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=plpk",
		      "demo": "/product/demo?type=plpk"
		    },
		    {
		      "icon": "zjjf",
		      "title": "战绩交锋",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=zjjf",
		      "demo": "/product/demo?type=zjjf"
		    },
		    {
		      "icon": "ssph",
		      "title": "赛事排行",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=ssph",
		      "demo": "/product/demo?type=ssph"
		    },
		    {
		      "icon": "cczr",
		      "title": "出场阵容",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=cczr",
		      "demo": "/product/demo?type=cczr"
		    },
		    {
		      "icon": "bfzb",
		      "title": "比分直播",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=bfzb",
		      "demo": "/product/demo?type=bfzb"
		    },
		    {
		      "icon": "zybl",
		      "title": "章鱼爆料",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=zybl",
		      "demo": "/product/demo?type=zybl"
		    },
		    {
		      "icon": "fxstj",
		      "title": "分析师推荐",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=fxstj",
		      "demo": "/product/demo?type=fxstj"
		    },
		    {
		      "icon": "qtgn",
		      "title": "其他功能",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "/product?type=qtgn",
		      "demo": "/product/demo?type=qtgn"
		    }
		  ]
		}

		const nodes = data[id].map(
			(items,index) => (
				this.renderItems(items,index)
			)
	  )

    return (
			<div>
				<Row type="flex" justify="space-around" className={styles.tabHd}>
					<Col span={7} >
						<Button className={styles.btn+' '+((id==0)&&styles.blue)} onClick={()=>this.clickHandler(0)}>彩票服务</Button>
					</Col>
					<Col span={7} >
						<Button className={styles.btn+' '+((id==1)&&styles.red)} onClick={()=>this.clickHandler(1)}>竞猜游戏</Button>
					</Col>
					<Col span={7} >
						<Button className={styles.btn+' '+((id==2)&&styles.purple)} onClick={()=>this.clickHandler(2)}>数据资讯</Button>
					</Col>
				</Row>
				<ul className={styles.tabBd}>
					<li>
				    <Row className={styles.feature}>
							{nodes}
				    </Row>
					</li>
				</ul>
			</div>
    )
  }
}