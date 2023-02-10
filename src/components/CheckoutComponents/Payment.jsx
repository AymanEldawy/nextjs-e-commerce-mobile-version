import React, { useState, useContext } from 'react';
import { LanguageContext } from './../../context/LangContext';
import { PaymentCardVisa } from './../PaymentCardVisa/PaymentCardVisa';
import Image from 'next/image';
import { AddNewVisaCard } from './AddNewVisaCard';
export const Payment = ({ nextStageHandler }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mb-8 gap-4">
      <div className="h-20 my-10 relative">
        <div className="absolute left-0 top-0 flex scale-75 items-center justify-around w-full gap-6">
          <PaymentCardVisa color="bg-[#CC2727]" />
          <PaymentCardVisa color="bg-[#4718CC]" />
          <PaymentCardVisa color="bg-[#700F0F]" />
        </div>
      </div>
      <div className="border border-[#EFEFEF] my-6" />
      <div className="flex flex-col items-center justify-center gap-6 mb-6">
        <small className="text-primary">Scan another card</small>
        <Image src="/images/scan.png" alt="Scan" height={97} width={124} />
      </div>
      <AddNewVisaCard onClick={nextStageHandler} />
    </div>
  );
};
