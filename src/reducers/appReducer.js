import createReducer from '../utils/createReducer'
import * as appActions from '../actions/appActions'
import { fromJS } from 'immutable'
console.log(appActions)

const initialState = fromJS({
  user: ''
})

// const appReducer = (state = initialState, action) => {
//   console.log(action, 121212)
//   switch (action.type) {
//     case appActions.UPDATE_USER: {
//       return { ...state, user: action.payload }
//     }
//     default:
//       return state;
//   }
// }

const actionHandlers = {
  [appActions.UPDATE_USER]: (state, { payload }) => {
    console.log(payload)
    return state.set('user', payload)
  }
}

export default createReducer(initialState, actionHandlers)