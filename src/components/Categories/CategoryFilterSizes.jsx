import React, { useState } from 'react';

export const CategoryFilterSizes = ({ title }) => {
  const sizes = ['s', 'm', 'l', 'xl', 'xxl'];
  const [groupSizes, setGroupSizes] = useState([]);
  const toggleGroup = (item) => {
    if (groupSizes.includes(item)) {
      setGroupSizes((prev) => prev.filter((s) => s !== item));
    } else {
      setGroupSizes((prev) => [...prev, item]);
    }
  };
  return (
    <div className="my-4 pb-4">
      <h3 className="text-tprimary mb-4 font-semibold text-base">{title}</h3>
      <div className="flex gap-2">
        {sizes?.map((size) => (
          <button
            key={size}
            className={`flex items-center justify-center p-2 text-sm font-normal  rounded-sm h-8 w-8 border border-[#DDDDDD] text-[#888888] ${
              groupSizes.includes(size)
                ? 'bg-primary border-primary !text-white'
                : ''
            } `}
            onClick={() => toggleGroup(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
