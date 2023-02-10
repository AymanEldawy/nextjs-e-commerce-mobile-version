import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import React, { useContext } from 'react';

import { CardRate } from './../Card/CardRate';
import { CheckIcon } from './../Icons/CheckIcon';
import { LanguageContext } from './../../context/LangContext';

export const ReviewCard = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="border-b p-4 overflow-hidden">
      <div className="flex gap-2">
        <figure>
          <Image
            src={'/images/home/person.png'}
            alt="Buyer name"
            height={71}
            width={71}
            className="rounded-full"
          />
        </figure>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <h4 className="text-sm font-medium ">Buyer Name</h4>
            <CardRate rating={4} noNumber />
          </div>
          <div className="flex items-center">
            <span className="scale-[50%] bg-primary h-7 w-7 rounded-full flex items-center justify-center">
              <CheckIcon />
            </span>
            <span className="text-[#BDBDBD] whitespace-nowrap text-xs">
              {fetchWord('confirmed_order', lang)}
            </span>
            <p className="mx-4 text-[#BDBDBD] text-xs">
              {new Date().toLocaleDateString('en-UK', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
      <p className="text-secondary text-xs  mt-2">
        It is a long established fact that a reader will be using Lorem Ipsu
        distracted by the readable content
      </p>
    </div>
  );
};
