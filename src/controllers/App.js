import React, { Component, PropTypes } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as appActions from '../actions/appActions'
console.log(appActions)
// import { appActions } from '../actions/appActions'
// import logo from '../asserts/logo.svg'
import styles from './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: 'YJF'
    }
  }

  static propTypes = {
    user: PropTypes.string,
    updateUser: PropTypes.func
  }

  componentDidMount() {
    console.log(this.props.actions)
  }

  handleClick = () => {
    this.props.actions.updateUser('FJY')
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {this.state.user}-{this.props.user}
        </p>
        <div onClick={this.handleClick}>
          点我点我
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    user: state.appReducer.get('user')
  }
}

const containerAction = dispatch => {
  // console.log(appActions, dispatch)
  // const actions = bindActionCreators({ appActions })
  return { 
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default compose(
  connect(mapStateToProps, containerAction)
)(App)
