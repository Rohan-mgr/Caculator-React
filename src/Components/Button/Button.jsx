import React from "react";
import "../../assets/css/Button.css";

function Button({ children, orange, expand, clicked }) {
  return (
    <div
      className={`primary__btn ${orange && "orange"}  ${expand && "expand"}`}
      onClick={clicked}
    >
      {children}
    </div>
  );
}

export default Button;
