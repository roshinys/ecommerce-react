import React, { useReducer } from "react";
import cartContext from "./cart-context";

const DUMMY_CART = [
  {
    id: 1,
    title: "T-Shirt",
    price: 9.99,
    quantity: 3,
  },
  {
    id: 2,
    title: "Bag",
    price: 10.99,
    quantity: 2,
  },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingCart = state.cartList.find(
        (cart) => cart.id === action.payload.product.id
      );
      if (existingCart) {
        const updatedCartList = state.cartList.map((cart) => {
          if (cart.id === action.payload.product.id) {
            cart.quantity += 1;
          }
          return cart;
        });
        return {
          ...state,
          cartList: updatedCartList,
          cartItemsCount: state.cartItemsCount + 1,
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
    cartList: DUMMY_CART,
    cartItemsCount: DUMMY_CART.length,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCartItemHandler = (product) => {
    dispatch({ type: "ADD_ITEM", payload: { product: product } });
  };

  const removeCartItemHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
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
