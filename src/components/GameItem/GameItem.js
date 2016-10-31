import React, { PropTypes, Component } from 'react'
import styles from './GameItem.css'
import { Link, browserHistory } from 'react-router'
import { Row, Col, Button } from 'antd' //antd栅格系统，css size：32k
import 'antd/lib/layout/style/index.css'


class GameItem extends Component {
  render() {
  
    return(
      <div>
        <div className = {styles.gameItem}>
          <div className = {styles.icon}>
          </div>
          <h2>竞彩</h2>
          <p>我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式、居右、等宽排列、分散排列。</p>
          <div className = {styles.detail}>
            <h3>彩票大乐透</h3>
            <p>支持平台：IOS、Android、H5</p>
            <p>采用技术：socket、react、redux</p>
            <div className={styles.buttonBox}>
              <Button >产品详情</Button>
              <Button >Demo</Button>
            </div>
          </div>
        </div>
        <div className = {styles.gameItem}>
          <div className = {styles.icon}>
          </div>
          <h2>竞彩</h2>
          <p>我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式、居右、等宽排列、分散排列。</p>
          <div className = {styles.detail}>
            <h3>彩票大乐透</h3>
            <p>支持平台：IOS、Android、H5</p>
            <p>采用技术：socket、react、redux</p>
            <div className={styles.buttonBox}>
              <Button >产品详情</Button>
              <Button >Demo</Button>
            </div>
          </div>
        </div>
        <div className = {styles.gameItem}>
          <div className = {styles.icon}>
          </div>
          <h2>竞彩</h2>
          <p>我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式、居右、等宽排列、分散排列。</p>
          <div className = {styles.detail}>
            <h3>彩票大乐透</h3>
            <p>支持平台：IOS、Android、H5</p>
            <p>采用技术：socket、react、redux</p>
            <div className={styles.buttonBox}>
              <Button >产品详情</Button>
              <Button >Demo</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//   <button onClick={() => browserHistory.push('/gameDetail/2')}>竞猜-此方法用于react组件外的导航</button>


export default GameItem
