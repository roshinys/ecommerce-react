import React from "react";
import Styles from "./Button.module.css";

function Button(props) {
  return (
    <button className={Styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
