import React from 'react';

const SVG = ({
  style = {},

  width = '100%',
  className = '',
  viewBox = '0 0 28 25',
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
      d="M9.65 21.534a1 1 0 01-1.42-.994L9.845 2.09a1 1 0 011.57-.733l15.171 10.624a1 1 0 01-.15 1.725L9.648 21.534z"
      fill="#3752F4"
    />
  </svg>
);

export default SVG;
