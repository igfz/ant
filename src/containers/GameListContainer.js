import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import GameTable from 'GameTable'

import GameItem from 'GameItem'


class GameListContainer extends Component {

  render() {
    const { items, isFetching} = this.props
    return (
        <GameTable isFetching = {isFetching} >
        </GameTable>
    )
  }
}

function mapStateToProps(state) {
 return {
   items: state.gameList.items,
   isFetching:state.gameList.isFetching
 }
}

export default connect(
  mapStateToProps
)(GameListContainer)








