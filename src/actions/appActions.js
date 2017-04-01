// import { bindActionCreators } from 'redux'

export const UPDATE_USER = 'UPDATE_USER'
// export const updateUser = payload => ({ type: UPDATE_USER, payload })

export const updateUser = payload => {
	console.log(payload)
  return {
    type: UPDATE_USER,
    payload
  }
}

// export const appActions = dispatch => bindActionCreators({
// 	updateUser
// }, dispatch)
