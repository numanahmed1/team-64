const initialState = {
    loading: false,
    user: [],
    error: '',
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_REGISTRATION': {
            const newState = {
                ...state,
                user: [...state.user, action.payload]
            }
            return newState;
        }
        case 'USER_LOGIN': {
            const newState = {
                ...state,
                user: [...state.user, action.payload]
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default authReducer;