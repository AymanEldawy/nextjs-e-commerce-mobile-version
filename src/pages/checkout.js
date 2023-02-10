import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { Layout } from '../components/Layout/Layout';
import { BillingDetails } from '../components/CheckoutComponents/BillingDetails';
import { Payment } from './../components/CheckoutComponents/Payment';
import { TrackOrder } from './../components/CheckoutComponents/TrackOrder';
import { ChoosePayment } from './../components/CheckoutComponents/ChoosePayment';
import { CheckoutPlaceOrder } from './../components/CheckoutComponents/CheckoutPlaceOrder';

const stagesTitle = ['Checkout', 'Payment Method', 'Confirm card', 'checkout'];
const Checkout = () => {
  const [title, setTitle] = useState('checkout');
  const [stage, setStage] = useState(0);
  const nextStageHandler = () => {
    setStage((prev) => prev + 1);
  };
  const backStageHandler = () => {
    if (stage === 1) return;
    setStage((prev) => prev - 1);
  };
  useEffect(() => {
    setTitle(stagesTitle[stage]);
  }, [stage]);
  const displayStages = () => {
    switch (stage) {
      case 0:
        return <BillingDetails nextStageHandler={nextStageHandler} />;
      case 1:
        return <ChoosePayment nextStageHandler={nextStageHandler} />;
      case 2:
        return <Payment nextStageHandler={nextStageHandler} />;
      case 3:
        // setTitle('Checkout');
        return <CheckoutPlaceOrder nextStageHandler={nextStageHandler} />;
      // return <TrackOrder nextStageHandler={nextStageHandler} />;
      default:
        return <BillingDetails />;
    }
  };
  return (
    <Layout
      back
      hideBottomMenu
      title={title}
      backSteps={stage > 1 ? backStageHandler : undefined}
    >
      {displayStages()}
    </Layout>
  );
};

export default Checkout;
