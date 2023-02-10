import React, { useState } from 'react';

export const CategoryFilterSizes = ({ title }) => {
  const [selectedSize, setSelectedSize] = useState();
  const sizes = ['s', 'm', 'l', 'xl', 'xxl'];
  return (
    <div className="my-4 pb-4">
      <h3 className="text-tprimary mb-4 font-semibold text-base">{title}</h3>
      <div className="flex gap-2">
        {sizes?.map((size) => (
          <button
            key={size}
            className={`flex items-center justify-center p-2 text-sm font-normal  rounded-sm h-8 w-8 border border-[#DDDDDD] text-[#888888] ${
              selectedSize === size
                ? 'bg-primary border-primary !text-white'
                : ''
            } `}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
