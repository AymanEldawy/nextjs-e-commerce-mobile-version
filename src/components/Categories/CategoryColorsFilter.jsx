import React from 'react';

import { CheckIcon } from './../Icons/CheckIcon';

export const CategoryColorsFilter = ({ title }) => {
  return (
    <div className="my-4 pb-4">
      <h3 className="text-tprimary mb-4 font-semibold text-base">{title}</h3>
      <div className="flex gap-2">
        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-primary">
          <CheckIcon />
        </span>
        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-[#59666F]"></span>
        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-[#513532]"></span>
        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-[#76EAD7]"></span>
      </div>
    </div>
  );
};
