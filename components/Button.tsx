import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx("classic-button", className)}
      {...props}
    >
      {children}
    </button>

  )
}

export default Button