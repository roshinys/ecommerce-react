import React from "react";
import Form from "../UI/Form/Form";
import { Container } from "react-bootstrap";

function Contact() {
  const contactHandler = async (user) => {
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/contact-user.json`,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <Container>
      <Form onContact={contactHandler} />
    </Container>
  );
}

export default Contact;
