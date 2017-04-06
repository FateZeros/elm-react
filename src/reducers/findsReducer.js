import createReducer from 'src/utils/createReducer'
import * as findsActions from 'src/actions/findsActions'
import { fromJS } from 'immutable'

const initialState = fromJS({
  user: '好好 '
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
  [findsActions.UPDATE_USER]: (state, { payload }) => {
    // console.log(payload)
    return state.set('user', payload)
  }
}

export default createReducer(initialState, actionHandlers)