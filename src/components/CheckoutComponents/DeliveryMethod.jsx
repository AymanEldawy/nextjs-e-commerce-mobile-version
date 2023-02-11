import React, { useContext } from 'react';
import { FedExIcon } from './../Icons/FedExIcon';
import { UspsComIcon } from './../Icons/UspsComIcon';
import { DHLIcon } from './../Icons/DHLIcon';
import { fetchWord } from './../../lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const DeliveryMethod = () => {
  const { lang } = useContext(LanguageContext);
  const methods = [
    {
      method: 'fedex',
      icon: <FedExIcon />,
    },
    {
      method: 'uspscom',
      icon: <UspsComIcon />,
    },
    {
      method: 'dhl',
      icon: <DHLIcon />,
    },
  ];
  return (
    <div className="mt-8">
      <h3 className="text-primary font-medium text-base mb-4">
        {fetchWord('Delivery Method', lang)}
      </h3>
      <div className="flex gap-4 justify-between items-center">
        {methods?.map((method) => (
          <button
            key={method}
            className="bg-white shadow-md rounded-md p-4 h-[70px] flex-1"
          >
            {method?.icon}
            <small className="mt-3 text-xs block text-[#9B9B9B]">
              2-3 {fetchWord('days', lang)}
            </small>
          </button>
        ))}
      </div>
    </div>
  );
};
