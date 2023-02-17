import { SVGProps } from "../types/global";
import { FC } from "react";

export const Minimize: FC<SVGProps> = ({
  size = 20,
  color = "currentColor",
  className
}) => (
  <svg
    className={className}
    width={size} height={size} viewBox="0 0 209 209" version="1.1" xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd" clipRule="evenodd" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5"
  >
    <path d="M33.333,166.667l141.667,-0.45" fill="none" stroke={color} strokeWidth="18.75px" />
  </svg>
);