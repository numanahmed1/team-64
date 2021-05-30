export const viewAllProduct = (payload) => {
    return (dispatch, getState) => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'VIEW_ALL_PRODUCT',
                    payload: data.products,
                })
                console.log(data.products)
            })
    }
}

export const viewSingleProduct = (payload) => {
    return {
        type: 'VIEW_SINGLE_PRODUCT',
        payload: payload,
    }
}
