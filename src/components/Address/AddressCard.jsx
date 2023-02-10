import React, { useContext } from 'react';
import { EditIcon } from './../Icons/EditIcon';
import { DeleteIcon } from './../Icons/DeleteIcon';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import { FlagIcon } from './../Icons/FlagIcon';

export const AddressCard = ({ address, setStage }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-[#F9F9F9] rounded-lg relative p-4 flex gap-2 items-start">
      <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center shrink-0 scale-90">
        <FlagIcon />
      </div>
      <div className="">
        <h4 className="text-primary mb-1">{fetchWord('home_address', lang)}</h4>
        <p className="text-xs text-[#9A949A]">
          {address?.country},{address?.city},{address?.street}
        </p>
      </div>
      <div className="flex gap-2">
        <button className="scale-90" onClick={(e) => setStage('edit')}>
          <EditIcon />
        </button>
        <button className="scale-90">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
