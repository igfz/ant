import React, { Component } from 'react'
import { Row, Col,Button } from 'antd'
import styles from './Biz.css'

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
      <Col xs={12} sm={6} md={6} lg={6}  className={styles.featureIteam} key = {index}>
	      <div className = {styles.icon}>
      	</div>
        <h2>{items.title}</h2>
        <p>{items.desc}</p>
        <div className = {styles.detail}>
          <h3>{items.subtitle}</h3>
          <p>支持平台：{items.platform}</p>
          <p>采用技术：{items.tech}</p>
          <Row type="flex" justify="center"  gutter={16} className={styles.buttonBox}>
          	<Col span={12}>
            	<Button type="primary">产品详情</Button>
            </Col>
            <Col span={12}>
            	<Button type="primary">Demo</Button>
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
		      "icon": "",
		      "title": "竞彩足篮球",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "传统足彩",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "北京单场",
		      "desc": "提供北京单场的所有期次赛程、浮动SP值和开奖SP值服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "大乐透",
		      "desc": "即将上线",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    }
		  ],
		  "1": [
		    {
		      "icon": "",
		      "title": "足篮球竞猜",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "电竞竞猜",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "事件竞猜",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "下单功能",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    }
		  ],
		  "2": [
		    {
		      "icon": "",
		      "title": "赔率盘口",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "战绩交锋",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "赛事排行",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "出场阵容",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "比分直播",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "章鱼爆料",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "分析师推荐",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
		    },
		    {
		      "icon": "",
		      "title": "其他功能",
		      "desc": "提供传统足彩的所有期次赛程和开奖 信息服务，玩法全面",
		      "subtitle": "竞彩",
		      "platform": "ios、Android、H5",
		      "tech": "Java 、 PHP、 .Net等语 言的SDK与Demo示例",
		      "detail": "",
		      "demo": ""
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