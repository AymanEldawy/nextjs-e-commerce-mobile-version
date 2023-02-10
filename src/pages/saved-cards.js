import React, { useContext, useState } from 'react';
import { PaymentCardVisa } from './../components/PaymentCardVisa/PaymentCardVisa';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';
import { Layout } from './../components/Layout/Layout';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { AddNewVisaCard } from '@/components/CheckoutComponents/AddNewVisaCard';

const SavedCards = () => {
  const { lang } = useContext(LanguageContext);
  const [stage, setStage] = useState(1);
  const backStage = () => setStage(1);
  return (
    <Layout
      title="Saved Cards"
      hideBottomMenu
      back
      backSteps={stage > 1 ? backStage : undefined}
    >
      <div className="mt-12">
        {stage === 1 ? (
          <div className="">
            <div className="grid grid-cols-2 gap-4">
              <PaymentCardVisa color="bg-green-500" />
              <PaymentCardVisa color="bg-blue-500" />
              <PaymentCardVisa color="bg-orange-500" />
            </div>
            <PrimaryButton
              onClick={() => setStage(2)}
              text="Add new card"
              classes="w-full !p-3 mt-60"
            />
          </div>
        ) : (
          <AddNewVisaCard title="Add new card" label="Add Card" />
        )}
      </div>
    </Layout>
  );
};

export default SavedCards;
