import React, { useState, useContext } from 'react';
import { InputFieldMobile } from './../Forms/InputFieldMobile';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from './../../lang/fetchWord';

export const AddressForm = ({ title }) => {
  const { lang } = useContext(LanguageContext);
  const [addressName, setAddressName] = useState('');
  const [addressDetails, setAddressDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${title} address successfully!`);
  };
  return (
    <form className="mt-8 min-h-[80vh] flex flex-col" onSubmit={handleSubmit}>
      <InputFieldMobile
        value={addressName}
        handleChange={(e) => setAddressName(e.target.value)}
        type="text"
        label={fetchWord('Address_Name', lang)}
      />
      <InputFieldMobile
        value={addressDetails}
        handleChange={(e) => setAddressDetails(e.target.value)}
        type="text"
        label={fetchWord('Address_Details', lang)}
      />
      <PrimaryButton text={title} classes="mt-auto w-full !p-4 rounded-md" />
    </form>
  );
};
