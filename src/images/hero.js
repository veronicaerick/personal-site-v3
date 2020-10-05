import React from 'react';

const hero = ({
  style = {},

  width = '100%',
  className = '',
  viewBox = '0 0 28 28',
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
    <circle cx="8.97596" cy="17.2719" r="8.97596" fill="#FFBD8A" />
    <path
      d="M16.4139 1.65812C16.7459 1.08307 17.576 1.08307 17.908 1.65812L26.577 16.6733C26.909 17.2484 26.494 17.9672 25.83 17.9672H8.49191C7.8279 17.9672 7.4129 17.2484 7.7449 16.6733L16.4139 1.65812Z"
      fill="#3552F4"
    />
  </svg>
);

export default hero;
