import React, { Component, PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'

import MinesView from 'src/views/mines/MinesView'
import MinesInfo from './info/MinesInfo'
import MinesRing from './ring/MinesRing'
import MinesAddr from './addr/MinesAddr'

import * as Routes from 'src/routes'

class Mines extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	static propTypes = {
		match: PropTypes.object
	}

	render() { 
		return (
			<Switch>
				<Route path={Routes.MINES_INDEX_ADDR} component={MinesAddr} />
				<Route path={Routes.MINES_INDEX_RING} component={MinesRing} />
				<Route path={Routes.MINES_INDEX_INFO} component={MinesInfo} />
				<Route path={Routes.MINES_INDEX} component={MinesView} />
			</Switch>
		)
	}
}

export default Mines
