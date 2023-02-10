import React, { useState, useContext } from 'react';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';
import { PlusCircleIcon } from './../Icons/PlusCircleIcon';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const ChoosePayment = ({ nextStageHandler }) => {
  const { lang } = useContext(LanguageContext);
  const [method, setMethod] = useState('Pay with card online');
  return (
    <div className="mt-12 flex flex-col">
      <h3 className="text-primary font-medium text-base mb-4">
        Choose your payment method
      </h3>
      <div className="mt-6">
        <div className="flex justify-between items-center  mb-5">
          <label
            className={`text-[##382D37] items-center text-sm flex gap-2 flex-1  ${
              method === 'Pay with card online' ? 'text-black' : ''
            }`}
          >
            <input
              type="radio"
              name="method"
              className="w-5 h-5 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2 accent-primary"
              onChange={() => setMethod('Pay with card online')}
            />
            Pay with card online
          </label>
          <button>
            <PlusCircleIcon />
          </button>
        </div>

        <label
          className={`text-[##382D37] items-center text-sm flex gap-2 mb-5 flex-1 ${
            method === 'cash' ? 'text-black' : ''
          }`}
        >
          <input
            type="radio"
            name="method"
            className="w-5 h-5 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2 accent-primary"
            onChange={() => setMethod('cash')}
          />
          {fetchWord('Cash', lang)}
        </label>
        <label
          className={`text-[##382D37] items-center text-sm flex gap-2 mb-5 flex-1 ${
            method === 'Pay by card at the door' ? 'text-black' : ''
          }`}
        >
          <input
            type="radio"
            name="method"
            className="w-5 h-5 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2 accent-primary"
            onChange={() => setMethod('Pay by card at the door')}
          />
          Pay by card at the door
        </label>
      </div>
      <PrimaryButton
        type="button"
        onClick={nextStageHandler}
        text={fetchWord('Next', lang)}
        classes="mt-48 w-full !p-4 rounded-md"
      />
    </div>
  );
};
