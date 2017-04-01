export default function createReducer(initialState, actionHandlers) {
    return (state = initialState, action) => {
    	console.log(action)
        const reduceFn = actionHandlers[action.type]
        if (!reduceFn) {
            return state
        }
        return reduceFn(state, action)
    }
}
