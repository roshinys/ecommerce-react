import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../../components/UI/Input/Input";
import { Button } from "react-bootstrap";
import AuthContext from "../../store/Auth/auth-context";

function Login() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const emailRef = useRef("");
  const passRef = useRef("");
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passRef.current.value;
      if (!email.toString().includes("@") || password.length < 6) {
        alert("not a valid email or pass");
        return;
      }
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_APIKEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const jwtToken = data.idToken;
        authCtx.login(jwtToken);
        localStorage.setItem("email", email);
        navigate("/shop");
      } else {
        const data = await response.json();
        let errorMessage = "Authentication Failed";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <form className={styles.form} onSubmit={loginHandler}>
      <Input label="Email" type="email" name="email" ref={emailRef} />
      <Input label="Password" type="password" name="password" ref={passRef} />
      <Button type="submit" className={styles.formButton}>
        Login
      </Button>
    </form>
  );
}

export default Login;
