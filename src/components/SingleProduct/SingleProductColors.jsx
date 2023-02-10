import React, { useState } from 'react';

import { CheckIcon } from './../Icons/CheckIcon';

export const SingleProductColors = () => {
  const [selectedColor, setSelectedColor] = useState('main');
  return (
    <div className="my-3 px-4">
      <h4 className="font-medium text-[#363636] text-sx mb-2">Color</h4>
      <div className="flex gap-3">
        <button
          className="bg-primary w-8 h-8 text-sm flex justify-center items-center rounded"
          onClick={(e) => setSelectedColor('main')}
        >
          {selectedColor === 'main' ? <CheckIcon /> : null}
        </button>
        <button
          className="bg-[#275DC6] w-8 h-8 text-sm flex justify-center items-center rounded"
          onClick={(e) => setSelectedColor('blue')}
        >
          {selectedColor === 'blue' ? <CheckIcon /> : null}
        </button>
        <button
          className="bg-[#171616] w-8 h-8 text-sm flex justify-center items-center rounded"
          onClick={(e) => setSelectedColor('black')}
        >
          {selectedColor === 'black' ? <CheckIcon /> : null}
        </button>
        <button
          className="bg-[#B23232] w-8 h-8 text-sm flex justify-center items-center rounded"
          onClick={(e) => setSelectedColor('red')}
        >
          {selectedColor === 'red' ? <CheckIcon /> : null}
        </button>
      </div>
    </div>
  );
};
