import React from 'react';

import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const CategoryFilterPrice = ({ title }) => {
  return (
    <div className="my-4 pb-4">
      <h3 className="text-tprimary mb-4 font-semibold text-base">{title}</h3>
      <div className="flex flex-col">
        <div className="flex text-xs justify-between text-[#D9D9D9] mb-[6px]">
          <span>200$</span>:<span>400$</span>
        </div>
        <div className="flex">
          <input
            type="range"
            className="appearance-none h-1 bg-[#D9D9D9] accent-primary w-full text-gray-400"
          />
          <input
            type="range"
            className="appearance-none h-1 bg-[#D9D9D9] accent-primary w-full text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};
