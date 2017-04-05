import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './controllers/App'
import store from './utils/createStore'

import './index.css'

const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App className="root"/>
	</Provider>, app 
)
