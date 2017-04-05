import React, { Component, PropTypes } from 'react'

import styles from './appView.css'

class AppView extends Component {
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
				<div className={styles.appHeader}>
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {this.props.user}
        </p>
        <div onClick={this.handleClick}>
          点我点我 
        </div>
			</div>
		)
	}
}

export default AppView