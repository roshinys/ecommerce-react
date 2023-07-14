import React, { useRef } from "react";
import Input from "../Input/Input";
import { Button } from "react-bootstrap";
import styles from "./Form.module.css";

function Form(props) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phnoRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phnoRef.current.value,
    };
    props.onContact(user);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phnoRef.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label="Name" type="text" name="name" ref={nameRef} />
      <Input label="Email" type="email" name="email" ref={emailRef} />
      <Input label="Phone" type="tel" name="phone" ref={phnoRef} />
      <Button type="submit" className={styles.formButton}>
        Contact
      </Button>
    </form>
  );
}

export default Form;
