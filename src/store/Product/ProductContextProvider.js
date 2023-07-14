import React, { useReducer } from "react";
import ProductContext from "./product-context";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "T-Shirt",
    images: [
      "https://tse3.mm.bing.net/th?id=OIP.X4AWKHeMBueGDMqOXZ9vegAAAA&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.DSjZPk9uy01_f2ox4Q5QPgHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120",
      "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/3/183983--product.jpg",
    ],

    description: "Its a t-shirt",
    price: 9.99,
  },
  {
    id: 2,
    title: "Bag",
    images: [
      "https://sp.yimg.com/ib/th?id=OPA.y2WQ1DOy2RutBQ474C474&o=5&pid=21.1&w=&h=",
    ],
    description: "Good Bag",
    price: 10.99,
  },
  {
    id: 3,
    title: "Mobile Phone",
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.Zhk0uCJ3ONbrpiAOQoXZEAHaHa&pid=Api&P=0&h=180",
    ],
    description: "New Mobile Phone",
    price: 199.99,
  },
  {
    id: 4,
    title: "T-Shirt",
    images: [
      "https://tse3.mm.bing.net/th?id=OIP.X4AWKHeMBueGDMqOXZ9vegAAAA&pid=Api&P=0&h=180",
    ],
    description: "Its a t-shirt",
    price: 9.99,
  },

  {
    id: 5,
    title: "T-Shirt",
    images: [
      "https://tse3.mm.bing.net/th?id=OIP.X4AWKHeMBueGDMqOXZ9vegAAAA&pid=Api&P=0&h=180",
    ],
    description: "Its a t-shirt",
    price: 9.99,
  },
];

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return;
    case "REMOVE_ITEM":
      return;
    default:
      return state;
  }
};

function ProductContextProvider(props) {
  const initialState = {
    products: DUMMY_PRODUCTS,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_ITEM", payload: { product: product } });
  };

  const removeProductHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
