import React from "react";
import { DeliveryAddress } from "./DeliveryAddress";
import { DeliveryMethod } from "./DeliveryMethod";
import { TotalSummary } from "./TotalSummary";
import { AddNewVisaCard } from "@/components/CheckoutComponents/AddNewVisaCard";
import { AddressForm } from "./../Address/AddressForm";

export const CheckoutPlaceOrder = ({ editStage, nextEditStageHandler }) => {
  return (
    <div>
      {editStage ? (
        <div className='mt-12'>
          {editStage === "EDIT_ADDRESS" ? <AddressForm /> : <AddNewVisaCard />}
        </div>
      ) : (
        <>
          <DeliveryAddress nextEditStageHandler={nextEditStageHandler} />
          <DeliveryMethod nextEditStageHandler={nextEditStageHandler} />
          <TotalSummary />
        </>
      )}
    </div>
  );
};
