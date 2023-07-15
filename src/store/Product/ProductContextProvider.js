import React, { useEffect, useState } from "react";
import ProductContext from "./product-context";

function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/products.json`
      );
      const data = await response.json();
      const loadedProducts = [];
      for (const key in data) {
        loadedProducts.push({
          id: key,
          title: data[key].title,
          images: JSON.parse(data[key].images),
          description: data[key].description,
          price: parseFloat(data[key].price),
        });
      }
      setProducts(loadedProducts);
    };
    getData();
  }, [products]);

  const addProductHandler = async (product) => {
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/products.json`,
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setProducts((prevState) => {
      return [
        ...prevState,
        {
          id: data.name,
          ...product,
        },
      ];
    });
  };

  const removeProductHandler = (id) => {};

  return (
    <ProductContext.Provider
      value={{
        products: products,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
