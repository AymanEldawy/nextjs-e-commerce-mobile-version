import React, { useContext } from 'react';
import { Layout } from './../components/Layout/Layout';
import { InputField } from './../components/Forms/InputField';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { LanguageContext } from './../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

const TrackOrder = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <div className="container !mb-12">
        <div className="h-7" />
        <h2 className="text-primary font-medium text-xl mb-4">
          {fetchWord('Track_Order', lang)}
        </h2>
        <div className="flex gap-4">
          <InputField type="email" label={fetchWord('your_email', lang)} />
          <InputField type="text" label={fetchWord('Order_Code', lang)} />
        </div>
        <PrimaryButton
          classes="mt-6 min-w-[200px] max-w-sm w-full mx-auto block !p-3"
          text={fetchWord('Track_Order', lang)}
        />
      </div>
    </Layout>
  );
};

export default TrackOrder;
