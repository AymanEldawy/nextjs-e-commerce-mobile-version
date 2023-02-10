import React, { useState } from 'react';
import { InputField } from '../Forms/InputField';
import { PrimaryButton } from '../Global/PrimaryButton/PrimaryButton';

export const AddNewVisaCard = ({ onClick }) => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [cvv, setCvv] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!onClick) onClick();
  };
  return (
    <div>
      <h3 className="text-primary font-medium text-base mb-4">
        Card information
      </h3>
      <form onSubmit={handleSubmit}>
        <InputField
          style={{ border: '2px solid #E5E5E5', padding: '12px' }}
          label="Name on card"
          type="text"
          name="cart"
          placeholder="Name"
          value={cardName}
          handleChange={(e) => setCardName(e.target.value)}
        />
        <InputField
          style={{ border: '2px solid #E5E5E5', padding: '12px' }}
          label="Card number"
          type="text"
          name="cardNumber"
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          handleChange={(e) => setCardNumber(e.target.value)}
        />
        <div className="flex gap-4">
          <InputField
            style={{ border: '2px solid #E5E5E5', padding: '12px' }}
            label="Expiration Date"
            type="tel"
            name="expirationDate"
            placeholder="MM/YY"
            value={expirationDate}
            handleChange={(e) => setExpirationDate(e.target.value)}
          />
          <InputField
            style={{ border: '2px solid #E5E5E5', padding: '12px' }}
            label="CVV"
            type="number"
            name="cvv"
            placeholder="777"
            value={cvv}
            handleChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            value="save"
            className="accent-primary h-4 w-4"
          />
          Save card information
        </label>
        <PrimaryButton
          text="Confirm Payment"
          classes="w-full !p-4 mt-4 rounded-lg"
        />
      </form>
    </div>
  );
};
