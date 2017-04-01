import _ from 'lodash'
import * as appActions from '../actions/appActions'
console.log(appActions)

const initialState = {
  user: ''
}

const appReducer = (state = initialState, action) => {
  console.log(action, 121212)
  switch (action.type) {
    case appActions.UPDATE_USER: {
      return { ...state, user: action.payload }
    }
    default:
      return state;
  }
}

export default appReducer