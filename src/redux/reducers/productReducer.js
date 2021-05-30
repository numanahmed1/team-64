const initialState = {
    loading: false,
    products: [],
    error: ''
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VIEW_ALL_PRODUCT': {
            const newState = {
                ...state,
                products: action.payload
            }
            return newState;
        }
        case 'VIEW_SINGLE_PRODUCT': {
            const singleProduct = {
                ...state,
                product: state.products.filter(product =>
                    product.id === action.payload)
            }
            return singleProduct;
        }
        default: {
            return state;
        }
    }
}

export default productReducer;