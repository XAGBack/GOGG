import clsx from "clsx";
import { ButtonHTMLAttributes, FC, forwardRef, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, onClick, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx("classic-button", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
});

Button.displayName = "CustomButton"

export default Button