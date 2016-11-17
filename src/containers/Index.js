import React, { Component } from 'react'
import { connect } from 'react-redux'

import Banner from 'Banner'
import Notify from 'Notify'
import Biz from 'Biz'
import Advantage from 'Advantage'

class Index extends Component {

	constructor(props) {
		super(props)
		this.clickSlideHandler = this.clickSlideHandler.bind(this)
		this.state = {idx:0}
	}

	shouldComponentUpdate (nextProps,nextState) {
		return this.state.idx != nextState.idx
	}

	clickSlideHandler(i) {
		this.setState({idx:i})
  }


  render() {
  	let idx = this.state.idx
    return (
			<div>

				<Banner 
					idx = {idx} 
					clickHandler = {this.clickSlideHandler}/>

				<div>

					<Biz 
						idx = {idx} 
						clickHandler = {this.clickSlideHandler} />

				</div>

				<Advantage 
					idx = {idx} />

			</div>
    )
  }
}

function mapStateToProps(state) {
 return {}
}

export default connect(mapStateToProps, {})(Index)
