import Styles from '@/styles/Menu/Menu.module.css';
import React, { useContext } from 'react';

import { CallIcon } from './../../Icons/CallIcon';
import { FreeShippingIcon } from './../../Icons/FreeShippingIcon';
import { GetUpIcon } from './../../Icons/GetUpIcon';
import { SmartPhoneIcon } from './../../Icons/SmartPhoneIcon';
import { WalletIcon } from './../../Icons/WalletIcon';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../../context/LangContext';
export const UpperMenu = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-primary h-[53px] text-white">
      <div className="container items-center flex justify-between h-full flex-wrap gap-4">
        <div className="flex items-center gap-2 ">
          <FreeShippingIcon />
          {fetchWord('upper_menu_free_shipping', lang)}
        </div>
        <div className="flex items-center gap-2">
          <GetUpIcon />
          {fetchWord('upper_menu_get_up', lang)}
        </div>
        <div className="flex items-center gap-2">
          <WalletIcon />
          {fetchWord('upper_menu_payment_options', lang)}
        </div>
        <div className="flex items-center gap-2">
          <SmartPhoneIcon />
          {fetchWord('upper_menu_download', lang)}
        </div>
        <div className="flex items-center gap-2">
          <CallIcon />
          {fetchWord('upper_menu_call_us', lang)}
        </div>
      </div>
    </div>
  );
};
