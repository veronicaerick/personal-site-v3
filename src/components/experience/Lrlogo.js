import React from 'react';

const SVG = ({
  style = {},

  width = '100%',
  className = '',
  viewBox = '0 0 32 32',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M8.419 26.612L0 35h10.888l-2.47-8.388zM10.066 26.336L12.62 35H35v-2.96l-24.934-5.704zM11.059 24.948l23.906 5.462V17.032l-23.906 7.916z"
      fill="#0C0B3A"
    />
    <path
      d="M34.465 14.99l-20.63 6.834 20.63-20.617V14.99z"
      fill="#30265A"
      stroke="#26385A"
    />
  </svg>
);

export default SVG;
