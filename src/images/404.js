import React from 'react';

const cactus = ({
  style = {},

  width = '100%',
  className = '',
  viewBox = '0 0 20 20',
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
    <path d="M13 1a1 1 0 00-1 1v3c0 .551-.448 1-1 1h-1V3a2 2 0 10-4 0v6H5c-.551 0-1-.449-1-1V4a1 1 0 00-2 0v4c0 1.654 1.346 3 3 3h1v4h4V8h1c1.654 0 3-1.346 3-3V2a1 1 0 00-1-1z" />
  </svg>
);

export default cactus;
