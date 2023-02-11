import React, { useState } from 'react';

import { CheckIcon } from './../Icons/CheckIcon';

export const CategoryColorsFilter = ({ title }) => {
  const [selectedColor, setSelectedColor] = useState('main');
  return (
    <div className="my-4 pb-4">
      <h3 className="text-tprimary mb-4 font-semibold text-base">{title}</h3>
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedColor('main')}
          className="flex items-center justify-center rounded-full h-8 w-8 bg-primary"
        >
          {selectedColor === 'main' ? <CheckIcon /> : null}
        </button>
        <button
          onClick={() => setSelectedColor('gray')}
          className="flex items-center justify-center rounded-full h-8 w-8 bg-[#59666F]"
        >
          {selectedColor === 'gray' ? <CheckIcon /> : null}
        </button>
        <button
          onClick={() => setSelectedColor('brown')}
          className="flex items-center justify-center rounded-full h-8 w-8 bg-[#513532]"
        >
          {selectedColor === 'brown' ? <CheckIcon /> : null}
        </button>
        <button
          onClick={() => setSelectedColor('sky-blue')}
          className="flex items-center justify-center rounded-full h-8 w-8 bg-[#76EAD7]"
        >
          {selectedColor === 'sky-blue' ? <CheckIcon /> : null}
        </button>
      </div>
    </div>
  );
};
