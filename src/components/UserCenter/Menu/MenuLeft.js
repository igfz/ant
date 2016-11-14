import React, { Component, PropTypes } from 'react'
import styles from './MenuLeft.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class MenuLeft extends Component {
  render() {
    let id = this.props.idx
    return (
      <ul className={styles.menu}>
        <Link to="/usercenter/accountinfo">
          <li className={styles.active}>账户信息</li>
        </Link>
        <Link to="/usercenter/certification">
          <li>实名认证</li>
        </Link>
        <Link to="/usercenter/costinfo">
         <li>费用信息</li>
        </Link>
        <Link to="/usercenter/transactrecord">
          <li>交易纪录</li>
        </Link>
        <Link to="/">
          <li>退出</li>
        </Link>
      </ul>
    )
  }
}
