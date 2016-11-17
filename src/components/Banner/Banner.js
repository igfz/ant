import React, { Component } from 'react'
import { Row, Col,Button,Icon,Carousel } from 'antd';
import styles from './Banner.css'

export default class Banner extends Component {

	constructor(props) {
		super(props)
		this.clickSlideHandler = this.clickSlideHandler.bind(this)
	}

	shouldComponentUpdate (nextProps,nextState) {
		this.clickSlideHandler(nextProps.idx)
		return false
	}

  clickSlideHandler(i) {
  	let t = this.refs.slider.refs.slick;	//小蚂蚁你坑死我了
  	if(i==8){
  		t.slickPrev()
  	}else if(i==9){
			t.slickNext()
  	}else{
  		t.slickGoTo(i)
  	}
  }

  render() {
  	let that = this
  	const settings = {
  		speed:200,
      dots: false,
      beforeChange: function (currentSlide, nextSlide) {
      	that.props.clickHandler(nextSlide)
      }
    }
    return (
			<div className={styles.caroWrap}>
				<Carousel ref='slider' {...settings} className={styles.carousel}>
					<div className={styles.blue}>
						<div className={styles.item}>
							<Row  className={styles.banner}>
								<Col xs={21} sm={21} md={12} lg={12} push = {1}>
									<h3>彩票服务</h3>
									<p>
										涵盖中国体育彩票下，竞彩足篮球、传统足彩、北京单场的全玩法赛程、固定奖金和SP值服务
									</p>
									<Button type="ghost">了解更多</Button>
								</Col>
								<Col xs={0} sm={0} md={7} lg={7} push = {4}>
									<div className={styles.img}></div>
								</Col>
							</Row>
						</div>
					</div>
					<div className={styles.red}>
						<div className={styles.item}>
							<Row  className={styles.banner}>
								<Col xs={21} sm={21} md={12} lg={12} push = {1}>
									<h3>竞猜游戏</h3>
									<p>
										让您的直播，社区，资讯等应用轻松接入竞猜业务提供独家专业的赛程，赔率，风控及操盘服务
									</p>
									<Button type="ghost">了解更多</Button>
								</Col>
								<Col xs={0} sm={0} md={7} lg={7} push = {4}>
									<div className={styles.img}></div>
								</Col>
							</Row>
						</div>
					</div>
					<div className={styles.purple}>
						<div className={styles.item}>
							<Row  className={styles.banner}>
								<Col xs={21} sm={21} md={12} lg={12} push = {1}>
									<h3>数据资讯</h3>
									<p>
										涵盖盘赔、基本面、爆料、预测等多方位数据资讯服务，贯穿赛前、赛中、赛后
									</p>
									<Button type="ghost">了解更多</Button>
								</Col>
								<Col xs={0} sm={0} md={7} lg={7} push = {4}>
									<div className={styles.img}></div>
								</Col>
							</Row>
						</div>
					</div>
				</Carousel>
				<Row type="flex" justify="space-between" className={styles.ears}>
					<Icon type="left" className={styles.down} onClick={()=>this.clickSlideHandler(8)} />
					<Icon type="right" className={styles.down} onClick={()=>this.clickSlideHandler(9)} />
				</Row>
			</div>
    )
  }
}