import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { AddToCardButton } from './../Card/AddToCardButton';
import { CardPrice } from './../Card/CardPrice';
import { CardRate } from './../Card/CardRate';
import { CardWishlist } from './../Card/CardWishlist';
import { HeartIcon } from './../Icons/HeartIcon';
import { Quantity } from './Quantity';

export const SingleProductInfo = ({ product }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex-1 px-4">
      <div className="flex flex-1 relative justify-between pt-3">
        <div className="flex justify-between">
          <div className="relative">
            <h2 className="text-xl capitalize">{product?.title}</h2>
            <p className="text-xs text-[#A0A0A0] my-2">
              {product?.category?.name}
            </p>
            <span className=" flex gap-1 text-sm">
              <CardRate rating={product?.rating} width={18} />
            </span>
          </div>
        </div>
        <div className=" flex flex-col justify-start items-end">
          <CardPrice price={product?.price} discount={product?.discount} />
          <Quantity count={1} />
        </div>
      </div>
    </div>
  );
};
