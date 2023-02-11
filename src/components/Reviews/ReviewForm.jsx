import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { CardRate } from './../Card/CardRate';
import { InputField } from './../Forms/InputField';
import { TextField } from './../Forms/TextField';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const ReviewForm = () => {
  const { lang } = useContext(LanguageContext);

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#F8F8F8D6] p-4">
      <div className="container">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="max-w-fit mx-auto ">
            <CardRate width={40} />
          </div>
          <TextField
            placeholder={fetchWord('review_placeholder', lang)}
            classes="h-14"
            value={review}
            handleChange={(e) => setReview(e.target.value)}
            required
          />
          <InputField
            value={name}
            handleChange={(e) => setName(e.target.value)}
            style={{ height: '60px' }}
            placeholder={fetchWord('your_name', lang)}
            required
          />
          <InputField
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            style={{ height: '60px' }}
            placeholder={fetchWord('email_place_holder', lang)}
            required
          />
          <PrimaryButton text={fetchWord("submit", lang)} classes="max-w-fit mx-auto !px-6" />
        </form>
      </div>
    </div>
  );
};
