import React from 'react';

export const CartIcon = ({ color, style }) => {
  return (
    <svg
      style={style}
      width="30"
      height="27"
      viewBox="0 0 30 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.90234 3.94116H27.8088C28.4103 3.94116 28.8757 4.46834 28.8011 5.0652L27.5805 14.8299C27.5179 15.3303 27.0925 15.7059 26.5882 15.7059H22.4056H11.9481H9.82391"
        stroke={color ? color : '#646464'}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M1 1H4.64539C5.09755 1 5.49345 1.30341 5.611 1.74003L10.3596 19.3776C10.4771 19.8142 10.873 20.1176 11.3252 20.1176H26"
        stroke={color ? color : '#646464'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="12.7655"
        cy="24.5294"
        r="1.47059"
        stroke={color ? color : '#646464'}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <circle
        cx="23.7948"
        cy="24.5294"
        r="1.47059"
        stroke={color ? color : '#646464'}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
};
