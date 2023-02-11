import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const BannerInfo = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="absolute top-1/2 left-1/2 w-[95%] -translate-y-1/2 -translate-x-1/2 text-center">
      <h1 className="text-5xl text-center mb-4  flex flex-col gap-2 whitespace-nowrap">
        <span className="text-2xl font-medium">
          {fetchWord('home_flash_sale', lang)}
        </span>
        <span className=" text-primary font-semibold rtl:text-3xl">
          {fetchWord('home_flash_get_up', lang)}
        </span>
      </h1>
      <div className="flex gap-2 min-w-full justify-center items-center">
        <span className='text-sm'>{fetchWord('use_this_code', lang)} </span>
        <PrimaryButton text={`${fetchWord('code', lang)}: Code123`} classes=" whitespace-nowrap" />
      </div>
    </div>
  );
};
