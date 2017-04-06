import React, { Component, PropTypes } from 'react'

import Footer from 'src/components/footer'
import styles from './FindsView.scss'

class FindsView extends Component {
	constructor() {
		super()

		this.state = {
			content: '发现首页'
		}
	}

	static propTypes = {
		user: PropTypes.string.isRequired,
		actions: PropTypes.object.isRequired
	}

	handleClick = () => {
    this.props.actions.updateUser('FJY')
  }

	render() {
		return (
			<div>
				<div className={styles.header}>
          <h2>{this.state.content}</h2>
        </div>
        <p>
          {this.props.user}
        </p>
        <div onClick={this.handleClick}>
          点我点我 
        </div>
        <Footer />
			</div>
		)
	}
}

export default FindsView