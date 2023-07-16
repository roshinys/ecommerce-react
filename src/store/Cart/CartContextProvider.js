import React, { useContext, useEffect, useReducer } from "react";
import cartContext from "./cart-context";
import { createCart, getCart, updatecart, removeCart } from "./cart-api";
import AuthContext from "../Auth/auth-context";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART":
      return {
        cartList: action.payload.cartList.slice(),
        cartItemsCount: action.payload.cartList.length,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartList: [
          ...state.cartList,
          {
            id: action.payload.cart.id,
            title: action.payload.cart.title,
            price: parseFloat(action.payload.cart.price).toFixed(2),
            quantity: action.payload.cart.quantity,
            productId: action.payload.cart.productId,
          },
        ],
        cartItemsCount: state.cartItemsCount + 1,
      };
    case "UPDATE_ITEM":
      const updatedCartList = state.cartList.map((cart) => {
        if (cart.id === action.payload.cart.id) {
          const quantity = action.payload.cart.quantity;
          return { ...cart, quantity };
        }
        return cart;
      });
      return {
        ...state,
        cartList: updatedCartList,
        cartItemsCount: updatedCartList.length,
      };
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
  const authCtx = useContext(AuthContext);
  const loginSuccess = authCtx.isLoggedIn;
  const initialState = {
    cartList: [],
    cartItemsCount: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const setCartList = async () => {
      const cartList = await getCart();
      dispatch({ type: "GET_CART", payload: { cartList: cartList } });
    };
    setCartList();
  }, [loginSuccess]);

  const addCartItemHandler = async (product) => {
    let existingCart = state.cartList.find((cart) => {
      return cart.productId === product.id;
    });
    if (existingCart) {
      const data = await updatecart(existingCart);
      let updatedCart = {
        id: data.id,
        price: parseFloat(data.price).toFixed(2),
        quantity: parseInt(data.quantity),
        productId: data.productId,
      };
      dispatch({ type: "UPDATE_ITEM", payload: { cart: updatedCart } });
      return;
    }
    let cart = {
      title: product.title,
      price: parseFloat(product.price).toFixed(),
      quantity: parseInt(1),
      productId: product.id,
    };
    const data = await createCart(cart);
    cart = { ...cart, id: data.name };
    dispatch({ type: "ADD_ITEM", payload: { cart: cart } });
  };

  const removeCartItemHandler = async (id) => {
    await removeCart(id);
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
