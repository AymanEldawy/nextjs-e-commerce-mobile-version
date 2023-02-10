import React from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const FormPromoCode = () => {
  return (
    <form className=" rounded-md bg-[#F9F9F9] flex p-4">
      <input type="text" placeholder="promo code" className='flex-1 bg-transparent '/>
      <PrimaryButton text="Apply" classes='rounded-md !h-8 text-sm'/>
    </form>
  );
};
