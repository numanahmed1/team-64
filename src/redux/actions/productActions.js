
export const viewAllProduct = (payload) => {
    return {
        type: 'VIEW_ALL_PRODUCT',
        payload: payload,
    }
}

export const viewSingleProduct = (payload) => {
    return {
        type: 'VIEW_SINGLE_PRODUCT',
        payload: payload,
    }
}
