const initialState = {
  loading: false,
  AllProducts: [],
  cart: [],
  orders: [],
  product: {},
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
    case "REMOVE_FROM_CART": {
      const newState = {
        ...state,
        cart: state.cart.filter(
          (singleCart) => singleCart.id !== action.payload.id
        ),
      };
      return newState;
    }
    case "ADD_TO_ORDERS": {
      const newState = {
        ...state,
        orders: [...state.orders, action.payload],
      };
      return newState;
    }
    case "VIEW_SINGLE_PRODUCT": {
      const singleProduct = {
        ...state,
        product: action.payload,
      };
      return singleProduct;
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
