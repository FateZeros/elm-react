import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import * as Routes from 'src/routes'
import Finds from './finds/Finds'
import Mines from './mines/Mines'
import Orders from './orders/Orders'
import Sells from './sells/Sells'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={Routes.FINDS_INDEX} component={Finds} />
          <Route path={Routes.MINES_INDEX} component={Mines} />
          <Route path={Routes.ORDERS_INDEX} component={Orders} />
          <Route path={Routes.SELLS_INDEX} component={Sells} />
          <Redirect from="/" to="/finds" />
        </Switch>
      </Router>
    )
  }
}

export default App
