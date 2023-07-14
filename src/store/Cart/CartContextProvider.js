import React, { useReducer } from "react";
import cartContext from "./cart-context";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingCart = state.cartList.find(
        (cart) => cart.id === parseInt(action.payload.product.id)
      );
      if (existingCart) {
        const updatedCartList = state.cartList.map((cart) => {
          if (cart.id === parseInt(action.payload.product.id)) {
            const quantity = parseInt(cart.quantity) + 1;
            return { ...cart, quantity };
          }
          return cart;
        });
        return {
          ...state,
          cartList: updatedCartList,
          cartItemsCount: updatedCartList.length,
        };
      } else {
        return {
          ...state,
          cartList: [
            ...state.cartList,
            {
              id: action.payload.product.id,
              title: action.payload.product.title,
              price: action.payload.product.price,
              quantity: 1,
            },
          ],
          cartItemsCount: state.cartItemsCount + 1,
        };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartList: state.cartList.filter(
          (cart) => cart.id !== action.payload.id
        ),
        cartItemsCount: state.cartItemsCount - 1,
      };
    default:
      return state;
  }
};

function CartContextProvider(props) {
  const initialState = {
    cartList: [],
    cartItemsCount: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCartItemHandler = (product) => {
    dispatch({ type: "ADD_ITEM", payload: { product: product } });
  };

  const removeCartItemHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: parseInt(id) } });
  };

  return (
    <cartContext.Provider
      value={{
        cartItems: state.cartList,
        cartItemsCount: state.cartItemsCount,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
