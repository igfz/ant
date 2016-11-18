import React, { Component, PropTypes } from 'react'
import { Icon,Row,Col,Button,Slider, InputNumber } from 'antd'
import {Link } from 'react-router'
import styles from './Main.css'

const IntegerStep = React.createClass({
  getInitialState() {
    return {
      inputValue: 1,
    };
  },
  onChange(value) {
    this.setState({
      inputValue: value,
    });
  },
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={4}>
          <InputNumber min={1} max={20} style={{ marginLeft: '16px' }}
            value={this.state.inputValue} onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  },
});

const DecimalStep = React.createClass({
  getInitialState() {
    return {
      inputValue: 0,
    };
  },
  onChange(value) {
    this.setState({
      inputValue: value,
    });
  },
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
        </Col>
        <Col span={4}>
          <InputNumber min={0} max={1} style={{ marginLeft: '16px' }} step={0.01}
            value={this.state.inputValue} onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  },
});

export default class Main extends Component {

	render() {

		return (
			<div style={{'maxWidth':'1200px','minHeight':'1200px','margin':'3% auto'}}>
				
				<Row type="flex" justify="space-between">
					<Col xs={23} sm={23} md={6} lg={6} className={styles.sildewp}>
						<div className={styles.slide}>
							<div className={styles.title}>
								<p>价格总计</p>
								<h2 className={styles.price}>24,000.00<span className={styles.unit}>元</span></h2>
								<h2>800<span className={styles.unit}>万次/月</span></h2>
							</div>
							<ul>
								<li>
									<p className={styles.smg}>竞彩</p>
									<p className={styles.detail}>
										<span>200万次/月</span><span>6000元</span>
									</p>
								</li>
								<li>
									<p className={styles.smg}>传统足球</p>
									<p className={styles.detail}>
										<span>200万次/月</span><span>6000元</span>
									</p>
								</li>
								<li>
									<p className={styles.smg}>篮球竞彩游戏</p>
									<p className={styles.detail}>
										<span>200万次/月</span><span>6000元</span>
									</p>
								</li>
								<li>
									<p className={styles.smg}>分析师推荐</p>
									<p className={styles.detail}>
										<span>200万次/月</span><span>6000元</span>
									</p>
								</li>
							</ul>
						</div>
					</Col>
					<Col xs={23} sm={23} md={16} lg={16} className={styles.rightcol}>
						<div className={styles.article}>
							<h2><span className={styles.greater}>01</span>/选择服务模块</h2>
							<h3>彩票服务</h3>
							<Row type="flex" justify="space-between">
					      <Col span={4}><Button type="primary">竞彩</Button></Col>
					      <Col span={4}><Button type="ghost">传统足球</Button></Col>
					      <Col span={4}><Button type="ghost">北京单场</Button></Col>
					      <Col span={4}><Button type="ghost">大乐透</Button></Col>
					    </Row>
					    <h3>竞猜游戏</h3>
							<Row type="flex" justify="space-between">
					      <Col span={4}><Button type="ghost">竞彩</Button></Col>
					      <Col span={4}><Button type="primary">传统足球</Button></Col>
					      <Col span={4}><Button type="ghost">北京单场</Button></Col>
					      <Col span={4}><Button type="ghost">大乐透</Button></Col>
					    </Row>
					    <h3>数据资讯</h3>
							<Row type="flex" justify="space-between" className={styles.wrap}>
					      <Col span={4}><Button type="ghost">竞彩</Button></Col>
					      <Col span={4}><Button type="ghost">篮球竞彩游戏</Button></Col>
					      <Col span={4}><Button type="primary">北京单场</Button></Col>
					      <Col span={4}><Button type="ghost">大乐透</Button></Col>
					    </Row>
					    <Row type="flex" justify="space-between" className={styles.row}>
					      <Col span={4}><Button type="primary">竞彩</Button></Col>
					      <Col span={4}><Button type="ghost">分析师推荐</Button></Col>
					      <Col span={4}><Button type="ghost">北京单场</Button></Col>
					      <Col span={4}></Col>
					    </Row>
							<h2><span className={styles.greater}>02</span>/选择订购量<span className={styles.describe}>（请按以上所选业务评估请求次数）</span>
							</h2>
							<p className={styles.notice}><Icon type="notification" className={styles.horn}/>的开发好看的恢复快圣诞节后付款时间的发货款式大方</p>
							<IntegerStep className={styles.row}/>
							<div className={styles.total}>
								<p>价格总计</p>
								<span  className={styles.price}>24,000.00</span><span className={styles.unit}>元/每月</span>
								<Button type="primary" className={styles.free}>免费试用</Button>
							</div>
						</div>
					</Col>
				</Row>

			</div>
		)
	}
}
