import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.scss'

class Footer extends Component {
	render() {
		console.log(this.props.match)
		return (
			<ul className={styles.footer}>
				<li className={styles.footerItem}><Link to="/sells">外卖</Link></li>
				<li className={styles.footerItem}><Link to="/finds">发现</Link></li>
				<li className={styles.footerItem}><Link to="/orders">订单</Link></li>
				<li className={styles.footerItem}><Link to="/mines">我的</Link></li>
			</ul>
		)
	}
}

export default Footer