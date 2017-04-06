import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Footer.scss'

class Footer extends Component {
	render() {
		return (
			<ul className={styles.footer}>
				<li className={styles.footerItem}>
					<NavLink to="/sells" activeClassName={styles.selectedSells}>
						<div className={styles.sellsItem}></div>
						<p>外卖</p>
					</NavLink>
				</li>
				<li className={styles.footerItem}>
					<NavLink to="/finds" activeClassName={styles.selectedFinds}>
						<div className={styles.findsItem}></div>
						<p>发现</p>
					</NavLink>
				</li>
				<li className={styles.footerItem}>
					<NavLink to="/orders" activeClassName={styles.selectedOrders}>
						<div className={styles.ordersItem}></div>
						<p>订单</p>
					</NavLink>
				</li>
				<li className={styles.footerItem}>
					<NavLink to="/mines" activeClassName={styles.selectedMines}>
						<div className={styles.minesItem}></div>
						<p>我的</p>
					</NavLink>
				</li>
			</ul>
		)
	}
}

export default Footer