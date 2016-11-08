import React, { Component, PropTypes } from 'react'

import Banner from './Banner'
import Main from './Main'

export default class Center extends Component {
	render() {
		return (
			<div>

				<Banner />

				<div style={{'maxWidth':'1200px','minHeight':'1200px','margin':'4% auto'}}>

					<Main />

				</div>
				
			</div>
		)
	}
}
