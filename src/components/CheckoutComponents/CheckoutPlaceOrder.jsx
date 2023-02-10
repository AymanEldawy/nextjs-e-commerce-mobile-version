import React from 'react';
import { DeliveryAddress } from './DeliveryAddress';
import { DeliveryMethod } from './DeliveryMethod';
import { TotalSummary } from './TotalSummary';

export const CheckoutPlaceOrder = () => {
  return (
    <div>
      <DeliveryAddress />
      <DeliveryMethod />
      <TotalSummary />
    </div>
  );
};
