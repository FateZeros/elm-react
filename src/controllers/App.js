import React, { Component, PropTypes } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as appActions from '../actions/appActions'
// import logo from '../asserts/logo.svg'
import styles from './App.scss'

import AppView from '../views/appView'
import Footer from '../components/footer'

import * as Routes from '../routes'
import FindsIndex from './finds/FindsIndex'
import MinesIndex from './mines/MinesIndex'
import OrdersIndex from './orders/OrdersIndex'
import SellsIndex from './sells/SellsIndex'

class App extends Component {
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
      <Router>
        <div className={styles.app}>
          { this.state.user }
          <AppView
            user={this.props.user}
            actions={this.props.actions}
          />
          <Switch>
            <Route path={Routes.FINDS_INDEX} component={FindsIndex}/>
            <Route path={Routes.MINES_INDEX} component={MinesIndex}/>
            <Route path={Routes.ORDERS_INDEX} component={OrdersIndex}/>
            <Route path={Routes.SELLS_INDEX} component={SellsIndex}/>
          </Switch>
          <Footer />
        </div>
      </Router>
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
