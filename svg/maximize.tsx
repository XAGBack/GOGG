import { SVGProps } from "../types/global";
import { FC } from "react";

export const Maximize: FC<SVGProps> = ({
  size = 20,
  color = "currentColor",
  className
}) => (
  <svg
    className={className}
    width={size} height={size} viewBox="0 0 209 209" version="1.1" xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd" clipRule="evenodd" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5"
  >
    <path d="M166.667,41.667l-125,-0" fill="none" stroke={color} strokeWidth="18.75px" />
    <path d="M41.667,172.917l125,-0" fill="none" stroke={color} strokeWidth="6.25px" />
    <path d="M35.417,172.917l-0,-135.417" fill="none" stroke={color} strokeWidth="6.25px" />
    <path d="M172.917,172.917l-0,-135.417" fill="none" stroke={color} strokeWidth="6.25px" />
  </svg>
);