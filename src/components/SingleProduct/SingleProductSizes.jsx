import React, { useState } from 'react';

export const SingleProductSizes = () => {
  const [selectedSize, setSelectedSize] = useState();
  const sizes = ['s', 'm', 'l', 'xl', 'xxl'];
  return (
    <div className="my-3 px-4">
      <h4 className="font-medium text-[#363636] text-sx mb-2">Size</h4>
      <div className="flex gap-4">
        {sizes?.map((size) => (
          <button
            key={size}
            className={`${
              selectedSize === size ? 'bg-primary border-primary text-white' : ''
            } border-[#DDDDDD] border w-8 h-8 text-sm flex justify-center items-center rounded`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
