const initialState = {
    loading: false,
    products: [{
        id: 1,
        title: 'shirt',
        price: '3000',
        category: 'man',
        description: 'mens shirt',
        image: 'shirt image'
    },
    {
        id: 2,
        title: 'pant',
        price: '2000',
        category: 'man',
        description: 'mans pant',
        image: 'pant image'
    }],
    error: ''
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VIEW_ALL_PRODUCT': {
            return state.products;
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