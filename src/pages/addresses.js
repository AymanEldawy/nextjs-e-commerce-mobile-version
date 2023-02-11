import React, { useState, useContext } from 'react';
import { AddressCard } from './../components/Address/AddressCard';
import { addresses } from '../data/cardData';
import { LanguageContext } from './../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import { Layout } from './../components/Layout/Layout';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { AddressForm } from './../components/Address/AddressForm';
const Addresses = () => {
  const { lang } = useContext(LanguageContext);
  const [stage, setStage] = useState('');

  const displayStage = (stage) => {
    console.log(stage);
    switch (stage) {
      case 'add':
        return <AddressForm title={fetchWord('add_address', lang)} />;
      case 'edit':
        return <AddressForm title={fetchWord('update', lang)} />;
    }
  };
  const handleBack = () => setStage('');
  return (
    <Layout
      title={fetchWord('my_address', lang)}
      back
      hideBottomMenu
      backSteps={stage !== '' ? handleBack : undefined}
    >
      <div className="mt-12">
        {stage ? (
          displayStage(stage)
        ) : (
          <div className="flex flex-col gap-4">
            {addresses?.map((address) => (
              <AddressCard
                key={address?.id}
                address={address}
                setStage={setStage}
              />
            ))}
            <PrimaryButton
              onClick={() => setStage('add')}
              text={fetchWord('add_new_address', lang)}
              classes="mt-20 w-full !p-4 rounded-md"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Addresses;
