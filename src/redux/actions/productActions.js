export const viewAllProduct = (payload) => {
  return (dispatch, getState) => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "VIEW_ALL_PRODUCT",
          payload: data,
        });
        console.log(data);
      });
  };
};
export const addToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};

export const viewSingleProduct = (payload) => {
  return {
    type: "VIEW_SINGLE_PRODUCT",
    payload,
  };
};
