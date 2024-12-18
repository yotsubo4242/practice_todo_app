import React from "react";
import "./Button.css";

type ButtonStlye = "add" | "delete" | "edit" | "default";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  style?: ButtonStlye;
};

function Button({ children, style, ...props }: ButtonProps) {
  return (
    <button {...props} className={`button ${style ? style : "default"}`}>
      {children}
    </button>
  );
}

export default Button;
