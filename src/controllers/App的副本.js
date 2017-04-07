import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Routes from 'src/routes'

import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => {
          console.log(location)
          console.log(Routes)
          const { pathname, key } = location
          return (
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <Route
                location={location}
                key={key} 
                path={pathname}
                component={Routes[pathname]}
              />
            </ReactCSSTransitionGroup>
          )
        }} 
        />
      </Router>
    )
  }
}

export default App
