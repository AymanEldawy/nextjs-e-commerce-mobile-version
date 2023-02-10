import React, { useContext } from 'react';

import { CartItemRow } from './CartItemRow';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const TableCart = ({ cart, increaseQuantity, decreaseQuantity }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mb-8">
      <div className="mt-8">
        {cart?.map((item) => (
          <CartItemRow item={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};
