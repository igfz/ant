import React, { Component, PropTypes } from 'react'
import styles from './AppService.css'
import { Switch } from 'antd'
import { Link } from 'react-router'

export default class AppService extends Component {

	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
	}

	onChange(checked) {
	  console.log("Switch");
	}

	render() {
		return (
			<div>
				<h2 className={styles.title}>服务开关</h2>
				<ul className={styles.box}>
					<li>
						<Switch defaultChecked={false} onChange={this.onChange()} />
						<span  className={styles.words}>竞彩</span>
					</li>
					<li>
						<Switch defaultChecked={false} onChange={this.onChange()} />
						<span  className={styles.words}>传统足彩</span>
					</li>
					<li>
						<Switch defaultChecked={false} onChange={this.onChange()} />
						<span  className={styles.words}>北京单场</span>
					</li>
					<li>
						<Switch defaultChecked={false} onChange={this.onChange()} />
						<span  className={styles.words}>大乐透</span>
					</li>
					<li>
						<Switch defaultChecked={false} onChange={this.onChange()} />
						<span  className={styles.words}>足球竞猜游戏</span>
					</li>
					<li>
						<Switch defaultChecked={false} onChange={this.onChange()} />
						<span  className={styles.words}>篮球竞猜游戏</span>
					</li>
					<li>
						<Switch defaultChecked={false} onChange={this.onChange()} />
						<span  className={styles.words}>事件竞猜游戏</span>
					</li>
					<li>
						<Switch defaultChecked={false} onChange={this.onChange()} />
						<span  className={styles.words}>下单功能</span>
					</li>
				</ul>
			</div>
		)
	}
}
