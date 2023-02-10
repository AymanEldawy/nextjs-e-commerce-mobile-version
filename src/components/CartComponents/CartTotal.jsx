import React, { useContext } from 'react';

import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { SectionTitle } from './../Global/SectionTitle';
import { MapIcon } from './../Icons/MapIcon';
import Link from 'next/link';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
export const CartTotal = ({ cart }) => {
  const { lang } = useContext(LanguageContext);
  const cartTotal = cart.reduce((result, cur) => {
    return (result += cur?.price * cur?.quantity);
  }, 0);
  return (
    <div className="my-6">
      <div className="flex justify-between mb-8">
        <p className="text-[#888888]">Total ({cart?.length}Item)</p>
        <h3 className='text-black text-lg font-medium'>${cartTotal}</h3>
      </div>
      <Link href="checkout" className="w-full max-w-xs ">
        <PrimaryButton
          text="Process to checkout"
          classes="!py-2 mt-4 w-full rounded-md h-12"
        />
      </Link>
    </div>
  );
};
