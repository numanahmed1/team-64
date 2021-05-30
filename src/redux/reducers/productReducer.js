const initialState = {
  loading: false,
  AllProducts: [],
  cart: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_ALL_PRODUCT": {
      const newState = {
        ...state,
        AllProducts: action.payload,
      };
      return newState;
    }
    case "ADD_TO_CART": {
      const newState = {
        ...state,
        cart: [...state.cart, action.payload],
      };
      return newState;
    }
    case "VIEW_SINGLE_PRODUCT": {
      const singleProduct = {
        ...state,
        product: state.AllProducts.filter(
          (product) => product.id === action.payload
        ),
      };
      return singleProduct;
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
