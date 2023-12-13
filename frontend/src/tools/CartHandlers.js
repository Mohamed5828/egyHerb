// cartHandlers.js

export const handleIncrement = (dispatch, productId) => {
  dispatch({
    type: "UPDATE_QUANTITY",
    payload: {
      productId,
      quantity: 1,
    },
  });
};

export const handleDecrement = (dispatch, productId, quantity) => {
  if (quantity > 1) {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        productId,
        quantity: -1,
      },
    });
  } else {
    handleRemove(dispatch, productId);
  }
};

export const handleRemove = (dispatch, productId) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      productId,
    },
  });
};

export const handleAddToCart = (dispatch, product) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: {
      productId: product.productId,
      productName: product.productName,
      quantity: 1,
    },
  });
};
