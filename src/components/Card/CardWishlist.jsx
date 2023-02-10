import React, { useState } from 'react';
import { HeartIcon } from './../Icons/HeartIcon';

export const CardWishlist = () => {
  const [inWishlist, setInWishlist] = useState(false);
  return (
    <button
      className="absolute right-3 top-3 rtl:left-4 rtl:right-auto scale-75"
      onClick={() => setInWishlist(!inWishlist)}
    >
      <HeartIcon color={inWishlist ? '#f00' : ''} />
    </button>
  );
};
