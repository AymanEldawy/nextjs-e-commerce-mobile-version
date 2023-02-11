import React, { useContext } from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { useRouter } from 'next/router';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from './../../lang/fetchWord';

export const TotalSummary = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  return (
    <div className="my-8">
      <h3 className=" font-medium text-base mb-4">
        {fetchWord('Total Summary', lang)}
      </h3>
      <ul className="flex flex-col gap-3">
        <li className="flex justify-between items-center">
          <span className="text-[#9B9B9B] text-sm">
            {fetchWord('Order', lang)}:
          </span>
          <strong>112$</strong>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-[#9B9B9B] text-sm">
            {fetchWord('Delivery', lang)}:
          </span>
          <strong>15$</strong>
        </li>
        <li className="flex justify-between items-center">
          <span className="font-medium text-base">
            {fetchWord('Summary', lang)}:
          </span>
          <strong>127$</strong>
        </li>
      </ul>
      <PrimaryButton
        text={fetchWord("Place order", lang)}
        classes="w-full !p-4 mt-4 rounded-lg mt-16"
        onClick={() => router.push('/confirmed')}
      />
    </div>
  );
};
