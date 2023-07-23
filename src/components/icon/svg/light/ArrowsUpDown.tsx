import React from "react";
import { SvgProps } from "~/types/app";

const ArrowsUpDown = ({ width, height, color }: SvgProps) => (
  <svg viewBox="0 0 320 512" width={width} height={height} fill={color}>
    <path d="M171.3 4.7c-6.1-6.1-15.9-6.3-22.2-.4l-104 96c-6.5 6-6.9 16.1-.9 22.6s16.1 6.9 22.6 .9L144 52.5V457.4L75.3 388.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L176 457.4V54.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96z" />
  </svg>
);

export default ArrowsUpDown;
