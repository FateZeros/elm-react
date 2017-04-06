import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from './controllers/App'
// import FindIndex from './controllers/finds/FindsIndex'

import store from './utils/createStore'

import './index.scss'
const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, app 
)
