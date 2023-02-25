import { SVGProps } from "../types/global";
import { FC } from "react";

export const Close: FC<SVGProps> = ({
  size = 20,
  color = "currentColor",
  className
}) => (
  <svg
    className={className}
    width={size} height={size} viewBox="0 0 209 209" version="1.1" xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.5"
  >
    <path d="M166.667,41.667l-125,125" fill="none" stroke={color} strokeWidth="18.75px" strokeLinecap="square" />
    <path d="M41.667,41.667l125,125" fill="none" stroke={color} strokeWidth="18.75px" strokeLinecap="square" />
  </svg>
);