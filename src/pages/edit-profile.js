import React, { useState, useContext } from 'react';
import { Layout } from './../components/Layout/Layout';
import { InputFieldMobile } from './../components/Forms/InputFieldMobile';
import { SelectFieldMobile } from './../components/Forms/SelectFieldMobile';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { LanguageContext } from './../context/LangContext';
import { fetchWord } from './../lang/fetchWord';

const EditProfile = () => {
  const { lang } = useContext(LanguageContext);
  const [fullName, setFullName] = useState('user name');
  const [email, setEmail] = useState('mail@mail.com');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const countries = [
    { id: 1, name: 'Egypt' },
    { id: 2, name: 'Saudi Arabia' },
    { id: 3, name: 'USA' },
  ];
  const ganders = [
    { id: 1, name: fetchWord('male', lang) },
    { id: 2, name: fetchWord('female', lang) },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('profile updated successfully!');
  };
  return (
    <Layout back title={fetchWord('edit_profile', lang)} hideBottomMenu>
      <form className="mt-12" onSubmit={handleSubmit}>
        <InputFieldMobile
          value={fullName}
          handleChange={(e) => setFullName(e.target.value)}
          type="text"
          label={fetchWord('username', lang)}
        />
        <InputFieldMobile
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          type="email"
          label={fetchWord('email', lang)}
        />
        <SelectFieldMobile
          value={country}
          handleChange={(e) => setCountry(e.target.value)}
          label={fetchWord('Country_Region', lang)}
          list={countries}
        />
        <SelectFieldMobile
          value={gender}
          handleChange={(e) => setGender(e.target.value)}
          label={fetchWord('gender', lang)}
          list={ganders}
        />
        <PrimaryButton
          text={fetchWord('update', lang)}
          classes="mt-20 w-full !p-4 rounded-md"
        />
      </form>
    </Layout>
  );
};

export default EditProfile;
