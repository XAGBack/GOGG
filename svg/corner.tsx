import { SVGProps } from "../types/global";
import { FC } from "react";

export const Corner: FC<SVGProps> = ({
  size = 20,
  color = "currentColor",
  className
}) => (
  <svg
    className={className}
    width={size} height={size} viewBox="0 0 209 209" version="1.1" xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5"
  >
    <path d="M10.417,197.917l187.5,-187.5" fill="none" stroke={color} strokeWidth="18.75px" />
    <path d="M177.083,197.917l20.834,-20.834" fill="none" stroke={color} strokeWidth="18.75px" />
    <path d="M93.75,197.917l104.167,-104.167" fill="none" stroke={color} strokeWidth="18.75px" />
  </svg>
);