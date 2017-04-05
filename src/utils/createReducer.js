export default function createReducer(initialState, actionHandlers) {
    return (state = initialState, action) => {
        const reduceFn = actionHandlers[action.type]
        if (!reduceFn) {
            return state
        }
        return reduceFn(state, action)
    }
}
