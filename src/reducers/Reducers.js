const initialState = {
    loggedInUserDetails: {}
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LOGGED_IN_USER_DETAILS": {
            return {
                ...state,
                loggedInUserDetails: action.payload
            }
        }
        default:
            return state;
    }
}