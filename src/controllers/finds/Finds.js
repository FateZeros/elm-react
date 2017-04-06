import React, { Component, PropTypes } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as findsActions from 'src/actions/findsActions'

import FindsView from 'src/views/finds/FindsView'

class Finds extends Component {
	constructor() {
    super()

    this.state = {
      user: 'YJF'
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    user: PropTypes.string,
    actions: PropTypes.shape({
      updateUser: PropTypes.func
    })
  }

	render() {
		return (
			<div>
				<FindsView
					user={this.props.user}
          actions={this.props.actions}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return{
    user: state.findsReducer.get('user')
  }
}

const mapActionToProps = dispatch => {
  return { 
    actions: bindActionCreators(findsActions, dispatch)
  }
}

export default compose(
  connect(mapStateToProps, mapActionToProps)
)(Finds)

