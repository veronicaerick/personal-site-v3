import React from 'react';
import { mainText } from '../../../constants/theme';

const website = ({
  style = {},

  width = '100%',
  className = '',
  viewBox = '0 0 24 24',
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
    <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path
        d="M.927 22.115L.001 2.305c-.03-.654.594-1.209 1.409-1.25L22.403.003c.829-.041 1.542.464 1.594 1.13.002.024.003.05.003.075v21.586C24 23.46 23.327 24 22.497 24l-.068-.001-20.067-.724c-.781-.028-1.405-.532-1.435-1.16z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M.927 22.115L.001 2.305c-.03-.654.594-1.209 1.409-1.25L22.403.003c.829-.041 1.542.464 1.594 1.13.002.024.003.05.003.075v21.586C24 23.46 23.327 24 22.497 24l-.068-.001-20.067-.724c-.781-.028-1.405-.532-1.435-1.16z"
        fill="#140208"
      />
      <path
        d="M17.722 2.95l.143-2.768L20.748 0l.124 2.855c.005.1-.092.182-.216.186a.263.263 0 01-.147-.039L19.398 2.3l-1.317.802c-.098.06-.24.044-.314-.035a.157.157 0 01-.045-.116zm-3.687 6.096c0 .47 3.94.244 4.468-.085 0-3.197-2.137-4.877-6.05-4.877-3.914 0-6.107 1.706-6.107 4.265 0 4.457 7.494 4.542 7.494 6.973 0 .683-.416 1.088-1.332 1.088-1.193 0-1.665-.49-1.61-2.152 0-.361-4.552-.474-4.69 0-.354 4.03 2.775 5.193 6.356 5.193 3.469 0 6.19-1.484 6.19-4.171 0-4.777-7.606-4.65-7.606-7.016 0-.96.888-1.088 1.416-1.088.555 0 1.554.079 1.47 1.87z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default website;
