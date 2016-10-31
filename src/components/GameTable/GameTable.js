import React, { Component, PropTypes } from 'react'
import styles from './GameTable.css'
import { Button } from 'antd'
import GameItem from 'GameItem'


export default class GameTable extends Component {

  render() {
    const {isFetching} = this.props
    return (
      <div>
        <div className={styles.bannerBox}>
          <div className={styles.banner}>
            <h1>彩票/游戏服务</h1>
            <p>Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language, while the TDD assert style provides a more classical feel.</p>
            <div className={styles.buttonBox}>
              <Button type="primary" size="large">彩票/游戏服务</Button>
              <Button size="large">数据/资讯服务</Button>
            </div>
          </div>
        </div>
        <div className={styles.gametable}>
          <GameItem />
        </div>
      </div>
    )
  }
}
 
 GameTable.propTypes = {
  isFetching:PropTypes.bool,
}