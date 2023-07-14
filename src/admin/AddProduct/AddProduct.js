import React, { useContext, useRef } from "react";
import Input from "../../components/UI/Input/Input";
import { Button } from "react-bootstrap";
import styles from "./AddProduct.module.css";
import ProductContext from "../../store/Product/product-context";

function AddProduct() {
  const prodCtx = useContext(ProductContext);
  const titleRef = useRef("");
  const descRef = useRef("");
  const imageRef = useRef("");
  const priceRef = useRef("");

  const addProductHandler = (e) => {
    e.preventDefault();
    const product = {
      title: titleRef.current.value,
      images: [imageRef.current.value],
      description: descRef.current.value,
      price: parseFloat(priceRef.current.value),
    };
    prodCtx.addProduct(product);
  };

  return (
    <form className={styles.form} onSubmit={addProductHandler}>
      <Input label="Title" type="text" name="title" ref={titleRef} />
      <Input label="Description" type="text" name="descritpion" ref={descRef} />
      <Input label="Image" type="text" name="image" ref={imageRef} />
      <Input label="Price" type="number" name="price" ref={priceRef} />
      <Button type="submit" className={styles.formButton}>
        Add Product
      </Button>
    </form>
  );
}

export default AddProduct;
