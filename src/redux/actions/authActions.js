
export const userRegistration = (payload) => {
    return {
        type: 'USER_REGISTRATION',
        payload: payload,
    }
}

export const userLogin = (payload) => {
    return {
        type: 'USER_LOGIN',
        payload: payload,
    }
}
