import React, { useContext } from 'react';
import { TrackOrderIcon } from './../Icons/TrackOrderIcon';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import Link from 'next/link';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
export const TrackOrder = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto justify-center items-center mb-12">
      <TrackOrderIcon />
      <h3 className="font-medium text-lg">
        {fetchWord('Order', lang)} #123RGR231567Y {fetchWord('Confirmed', lang)}{' '}
      </h3>
      <Link href="track-order" className=" block w-full max-w-sm">
        <PrimaryButton
          classes="w-full !p-3"
          text={fetchWord('Track Order', lang)}
        />
      </Link>
      <p className="text-xs text-[#9DA3A1]">
        {fetchWord('Generate_Receipt', lang)}
      </p>
    </div>
  );
};
