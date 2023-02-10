import React, { useState, useContext } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { InputField } from './../Forms/InputField';
import { SelectField } from './../Forms/SelectField';
import { TextField } from './../Forms/TextField';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';
import { InputFieldMobile } from './../Forms/InputFieldMobile';
import { SelectFieldMobile } from './../Forms/SelectFieldMobile';

export const BillingDetails = ({ nextStageHandler }) => {
  const { lang } = useContext(LanguageContext);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [town, setTown] = useState('');
  const [street, setStreet] = useState('');
  const [phone, setPhone] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const countries = [
    { id: 1, name: 'Egypt' },
    { id: 2, name: 'Saudi Arabia' },
    { id: 3, name: 'USA' },
  ];
  return (
    <div className="mt-8">
      <h3 className='text-primary font-medium text-base mb-4'>Shipping</h3>
      <form className="flex flex-col mb-8" onSubmit={handleSubmit}>
        <InputFieldMobile
          value={fullName}
          handleChange={(e) => setFullName(e.target.value)}
          type="text"
          label={fetchWord('first_name_label', lang)}
        />
        <InputFieldMobile
          value={address}
          handleChange={(e) => setAddress(e.target.value)}
          type="text"
          label="address"
        />
        <InputFieldMobile
          value={address}
          handleChange={(e) => setAddress(e.target.value)}
          type="text"
          label="city"
        />
        <InputFieldMobile
          value={address}
          handleChange={(e) => setAddress(e.target.value)}
          type="text"
          label="State/Province/Region"
        />
        <InputFieldMobile
          value={address}
          handleChange={(e) => setAddress(e.target.value)}
          type="text"
          label="Zip Code (Postal Code)"
        />
        <SelectFieldMobile
          value={country}
          handleChange={(e) => setCountry(e.target.value)}
          label={fetchWord('Country_Region', lang)}
          list={countries}
        />
        <PrimaryButton
          type="button"
          onClick={nextStageHandler}
          text={fetchWord('Next', lang)}
          classes="mt-4 w-full max-w-sm mx-auto !p-4 rounded-md"
        />
      </form>
    </div>
  );
};
