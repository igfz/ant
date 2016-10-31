import React, { Component } from 'react'
import { Row, Col,Button } from 'antd';
import styles from './Advantage.css'

export default class Advantage extends Component {

	componentDidMount() {
		addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
		removeEventListener('scroll', this.handleScroll.bind(this));
	}
	
	handleScroll() {
		const obj = {}
		obj[0] = document.getElementById('anim1');
		obj[1] = document.getElementById('anim2');
		obj[2] = document.getElementById('anim3');
		for (var i in obj){
			if (document.body.scrollTop > (obj[i].offsetTop - innerHeight+240)) {
				obj[i].className = styles.cont+"  "+styles.animFadeIn;
			}
    }
	}

  render() {

  	let id = this.props.idx

    return (
				<ul className={styles.desc}>
					<li>
						<Row  className={styles.cont} id = "anim1">
							<Col span = {9} push = {2}>
								<h3>最简单的部署</h3>
								<p>
									无需购买任何硬件，无需配备专业IT工程师， 就能得到最新的技术应用
								</p>
							</Col>
							<Col span = {7} push = {6}>
								<img style={{"width":"100%","height":"360px"}} src="http://m.8win.com/info/img/default-s.png" />
							</Col>
						</Row>
					</li>
					<li>
						<Row  className={styles.cont} id = "anim2">
							<Col span = {7} push = {2}>
								<img style={{"width":"100%","height":"360px"}} src="http://m.8win.com/info/img/default-s.png" />
							</Col>
							<Col span = {9} push = {6}>
								<h3>更低廉的费用</h3>
								<p>
									无需一次性高额投资，无需考虑成本折旧， 减轻运营资金压力
								</p>
							</Col>
						</Row>
					</li>
					<li>
						<Row  className={styles.cont} id = "anim3"> 
							<Col span = {9} push = {2}>
								<h3>更专业的服务</h3>
								<p>
									无需专业的数学人才，成熟的竞猜游戏模型 给您强有力的支持
								</p>
							</Col>
							<Col span = {7} push = {6}>
								<img style={{"width":"100%","height":"360px"}} src="http://m.8win.com/info/img/default-s.png" />
							</Col>
						</Row>
					</li>
					<li>
						<Button 
							type="primary" 
							size="large" 
							className={styles.btn+' '+((id==0)?styles.blue:((id==1)?styles.red:styles.purple))}>
								免费试用
						</Button>
					</li>
				</ul>
    )
  }
}