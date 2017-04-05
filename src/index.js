import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './controllers/App'
import store from './utils/createStore'

import './index.scss'

const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, app 
)
