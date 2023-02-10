import React, { useState } from 'react';

import { MinusIcon } from './../Icons/MinusIcon';
import { PlusIcon } from './../Icons/PlusIcon';

export const Quantity = ({ increment, decrement, count }) => {
  const [quantity, setQuantity] = useState(count || 1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="flex  mt-1 items-center border-primary border rounded-md justify-between text-center">
      <button className="flex-1 p-1 items-center flex justify-center w-7 h-6" onClick={decreaseQuantity}>
        <MinusIcon />
      </button>
      <span className=" border-r border-l border-primary flex-1 p-1 text-primary">
        {quantity}
      </span>
      <button className="flex-1 p-1 flex items-center justify-center w-7 h-6" onClick={increaseQuantity}>
        <PlusIcon />
      </button>
    </div>
  );
};
