import { getItemById } from '@/data/cardData';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Quantity } from './../SingleProduct/Quantity';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import { TrashIcon } from './../Icons/TrashIcon';

export const CartItemRow = ({ item }) => {
  const product = getItemById(item?.productId);
  const { lang } = useContext(LanguageContext);

  return (
    <div className="py-4 px-2 flex gap-4  bg-[#F4F4F4] mb-4 rounded-lg">
      <figure className="flex-shrink-0 w-20">
        <Image src={product?.img} alt={item?.title} height={180} width={150} />
      </figure>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between mb-2 items-start">
          <div className="">
            <h4 className="capitalize text-sm font-medium">{product?.title}</h4>
            <p className="text-xs mt-1">
              {fetchWord('item_code', lang)}: <span>47536</span>
            </p>
          </div>
          <button className="">
            <TrashIcon />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {item?.id % 2 === 0 ? <span className="text-[#8C8C8C] text-sm line-through">$201</span> : null}
            <h4 className="capitalize text-base font-medium">
              ${item?.price * item?.quantity}
            </h4>
          </div>
          <Quantity
            count={item?.quantity}
            increment={() => increaseQuantity(item?.id)}
            decrement={() => decreaseQuantity(item?.id)}
          />
        </div>
      </div>
    </div>
  );
};
