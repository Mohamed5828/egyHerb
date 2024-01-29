// cartHandlers.js

export const handleIncrement = (dispatch, productId) => {
  dispatch({
    type: "UPDATE_QUANTITY",
    payload: {
      productId,
      cartQuantity: 1,
    },
  });
};

export const handleDecrement = (dispatch, productId, cartQuantity) => {
  if (cartQuantity > 1) {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        productId,
        cartQuantity: -1,
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
      image: product.image,
      title: product.title,
      quantity: product.quantity,
      priceEgypt: parseInt(product.priceEgypt),
      id: product.id,
      cartQuantity: 1,
    },
  });
};
