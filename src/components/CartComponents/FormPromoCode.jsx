import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from './../../lang/fetchWord';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const FormPromoCode = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <form className=" rounded-md bg-[#F9F9F9] flex p-4">
      <input
        type="text"
        placeholder={fetchWord("promo code", lang)}
        className="flex-1 bg-transparent "
      />
      <PrimaryButton
        text={fetchWord('Apply', lang)}
        classes="rounded-md !h-8 text-sm"
      />
    </form>
  );
};
