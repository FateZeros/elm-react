import React, { Component, PropTypes } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as appActions from '../actions/appActions'
// import logo from '../asserts/logo.svg'
import styles from './App.css'

import AppView from '../views/appView'
import Footer from '../components/footer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: 'YJF'
    }
  }

  static propTypes = {
    user: PropTypes.string,
    actions: PropTypes.shape({
      updateUser: PropTypes.func
    })
  }

  render() {
    return (
      <div className={styles.app}>
        { this.state.user }
        <AppView
          user={this.props.user}
          actions={this.props.actions}
        />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    user: state.appReducer.get('user')
  }
}

const mapActionToProps = dispatch => {
  return { 
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default compose(
  connect(mapStateToProps, mapActionToProps)
)(App)
