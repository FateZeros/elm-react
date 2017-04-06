import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import Footer from 'src/components/footer'

import styles from './MinesView.scss'
import demoImg from 'src/asserts/demo.jpeg'

class MinesView extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	static PropTypes = {
		match: PropTypes.object
	}

	render() {
		const { url } = this.props.match

		return (
			<div>
				<div className={styles.toolbars}>
					我的首页
				</div>
				<Link to={{ pathname: `${url}/info` }}>
					<div className={styles.minesInfo}>
						<div className={styles.myImg}>
							<img src={demoImg} alt="myImg" />
						</div>
						<div className={styles.myBrief}>
							<p className={styles.myName}>秋月无边</p>
							<p className={styles.myPhone}>1872819812</p>
						</div>
						<div className={styles.rightArrow}>
						</div>
					</div>
				</Link>
				<Footer />
			</div>
		)
	}
}

export default MinesView