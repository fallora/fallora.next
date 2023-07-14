import React from "react";
import { SvgProps } from "~/types/app";

const Angle90 = ({ width, height, color }: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={width} height={height} fill={color}>
    <path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v400c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V56zm48 41.6v48.3c31 3.6 60.4 12.5 87.4 25.7l25.3-41.1C174.2 113 136.2 101.6 96 97.6zm115.2 89.7c32.6 21 60.5 48.9 81.5 81.5l40.9-25.2c-25-39-58.2-72.2-97.2-97.2l-25.2 40.9zM334.1 384h48.3c-4-40.2-15.4-78.2-32.9-112.6l-41.1 25.3c13.2 26.9 22 56.3 25.7 87.4z" />
  </svg>
);

export default Angle90;