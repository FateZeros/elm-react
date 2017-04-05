import React, { Component } from 'react'

import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<ul className="footer">
				<li className="footer-item">外卖</li>
				<li className="footer-item">发现</li>
				<li className="footer-item">订单</li>
				<li className="footer-item">我的</li>
			</ul>
		)
	}
}

export default Footer