import React, { useContext } from 'react';
import Image from 'next/image';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';

import Head from 'next/head';
import { LoginWithSocialAccount } from './../components/LoginWithSocialAccount/LoginWithSocialAccount';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';
const LoginWith = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>Login With</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mobile-container pt-12">
        <figure className="full-image">
          <Image
            src="/images/login-with.jpg"
            alt="login with"
            height={300}
            width={1500}
          />
        </figure>
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-3 text-primary mb-8">
            <h1 className="text-primary w- text-4xl my-8 text-center">
              {fetchWord('signup', lang)}
            </h1>

            <div className="flex items-center gap-4 mb-8 justify-center">
              <span className="h-[2px] w-40 bg-primary flex-1"></span>{' '}
              <h3 className="text-2xl font-normal text-primary">
                {fetchWord('with', lang)}
              </h3>
              <span className="h-[2px] w-40 bg-primary flex-1"></span>
            </div>
            <PrimaryButton
              classes="w-72 !py-2 rounded-lg"
              text={fetchWord('"Mobile number"', lang)}
            />
            <PrimaryButton classes="w-72 !py-2 rounded-lg" text="Email" />
            <span className="w-3 block mx-auto my-6">
              {fetchWord('or', lang)}
            </span>
            <LoginWithSocialAccount />
          </div>
        </div>
        <div className="h-16" />
      </div>
    </>
  );
};

export default LoginWith;
