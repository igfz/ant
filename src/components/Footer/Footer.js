import React, { Component, PropTypes } from 'react'
import styles from './Footer.css'
import { Row, Col } from 'antd';


export default class Footer extends Component {

  render() {
    return (
      <footer>
      	<div className={styles.selfBox}>
			    <Row type="flex" align="top" justify="center" className={styles.self}>
			    	<Col xs={1} sm={1} md={1} lg={1}>
			      </Col>
			      <Col xs={14} sm={8} md={8} lg={8}>
				      	<h3>产品功能</h3>
				      	<Row>
				      		<Col span={7}>
						      	<ul>
						      		<li>足篮球竞猜</li>
						      		<li>电竞竞猜</li>
						      		<li>事件竞猜</li>
						      		<li>大乐透</li>
						      	</ul>
						      </Col>
				      		<Col span={7}>
						      	<ul>
						      		<li>竞彩足篮球</li>
						      		<li>传统足彩</li>
						      		<li>北京单场</li>
						      		<li>下单功能</li>
						      	</ul>
						      </Col>
				      		<Col span={7}>
						      	<ul>
						      		<li>赔率盘口</li>
						      		<li>战绩交锋</li>
						      		<li>赛事排行</li>
						      		<li>出场阵容</li>
						      		<li>比分直播</li>
						      		<li>章鱼爆料</li>
						      		<li>分析师推荐</li>
						      	</ul>
						      </Col>
						    </Row>
			      </Col>
			      <Col xs={9} sm={5} md={5} lg={5}>
				      <h3>我们的优势</h3>
				      	<ul>
				      		<li>最简单的部署</li>
				      		<li>更低廉的费用</li>
				      		<li>最省心的维护</li>
				      		<li>更专业的服务</li>
				      	</ul>
			      </Col>
			    	<Col xs={1} sm={0} md={0} lg={0}>
			      </Col>
			      <Col xs={14} sm={5} md={5} lg={5}>
				      <h3>帮助与支持</h3>
				      	<ul>
				      		<li>开发者文档</li>
				      		<li>服务条款</li>
				      		<li>常见问题</li>
				      		<li>费用相关</li>
				      	</ul>
			      </Col>
			      <Col xs={9} sm={5} md={5} lg={5}>
				      <h3>联系我们</h3>
				      	<ul>
				      		<li>电话: 400-7766-981</li>
				      		<li>邮箱: help@8win.com</li>
				      		<li>商务合作: bd@8win.com</li>
				      		<li>微信公众号: 8win</li>
				      	</ul>
			      </Col>
			    </Row>
		    </div>
		    <div className={styles.footer}>
		      <Row type="flex" justify="center" className={styles.lh50}>
		      	<Col span={24}>
			      	<a href="#" className={styles.href}>关于我们</a>|<a href="#" className={styles.href}>商务合作</a>|<a href="#" className={styles.href}>隐私条款</a>|<a href="#" className={styles.href}>版权声明</a>|<a href="#" className={styles.href}>友情链接</a>
			      </Col>
			    </Row>
			    <Row type="flex" justify="center" className={styles.copy}>
		      	<Col>
			      	<span>Copyright © 2011-2016 www.8win.com All Rights </span><span>Reserved　|　京ICP备14036607号</span>
			      </Col>
			    </Row>
			  </div>
      </footer>
    )
  }
}
