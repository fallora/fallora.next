import React from "react";
import { SvgProps } from "~/types/app";

const Maximize2 = ({ width, height, color }: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill={"none"}>
    <path
      fill={color}
      d="M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.89 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75zM22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.36 5.25 5.25V9c0 .41-.34.75-.75.75zM16.8 22.75h-1.7a.856.856 0 01-.85-.85c0-.465.385-.85.85-.85h1.7a4.252 4.252 0 004.25-4.25v-1.7c0-.465.385-.85.85-.85.465 0 .85.385.85.85v1.7c0 3.275-2.675 5.95-5.95 5.95zM9 22.75H6.5c-2.89 0-5.25-2.36-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75z"
    />
  </svg>
);

export default Maximize2;
