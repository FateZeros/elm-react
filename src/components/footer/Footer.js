import React, { Component } from 'react'

import styles from './Footer.scss'

class Footer extends Component {
	render() {
		return (
			<ul className={styles.footer}>
				<li className={styles.footerItem}>外卖</li>
				<li className={styles.footerItem}>发现</li>
				<li className={styles.footerItem}>订单</li>
				<li className={styles.footerItem}>我的</li>
			</ul>
		)
	}
}

export default Footer