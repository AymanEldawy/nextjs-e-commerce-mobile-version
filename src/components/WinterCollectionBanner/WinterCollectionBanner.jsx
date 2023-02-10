import Image from 'next/image';
import React, { useContext } from 'react';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const WinterCollectionBanner = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mt-4 relative">
      <Image
        className="object-cover min-h-[150px]"
        src="/images/home/winter-collection.png"
        alt="Winter Collection"
        height={100}
        width={400}
      />
      <div className="winter-backdrop !bg-[#734C0087] text-white absolute w-full flex items-center justify-center flex-col top-0 left-0 max-w-3xl h-full">
        <h2 className="text-2xl mb-3 text-center">
          {fetchWord('Winter', lang)}
          <span className="block">{fetchWord('Collection', lang)}</span>{' '}
        </h2>
        <button className="text-primary font-medium bg-transparent text-2xl">
          {fetchWord('Shop_now', lang)}
        </button>
      </div>
    </div>
  );
};
