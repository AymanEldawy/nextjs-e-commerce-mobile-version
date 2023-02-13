import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import { BillingDetails } from "../components/CheckoutComponents/BillingDetails";
import { Payment } from "./../components/CheckoutComponents/Payment";
import { TrackOrder } from "./../components/CheckoutComponents/TrackOrder";
import { ChoosePayment } from "./../components/CheckoutComponents/ChoosePayment";
import { CheckoutPlaceOrder } from "./../components/CheckoutComponents/CheckoutPlaceOrder";

const stagesTitle = ["Checkout", "Payment Method", "Confirm card", "checkout"];
const editStageTitle = {
  EDIT_ADDRESS: "Edit Address",
  EDIT_PAYMENT: "Edit Payment",
};
const Checkout = () => {
  const [title, setTitle] = useState("checkout");
  const [stage, setStage] = useState(0);
  const [editStage, setEditStage] = useState("");
  const nextStageHandler = () => {
    setStage((prev) => prev + 1);
  };
  const backStageHandler = () => {
    if (stage === 1) return;
    if (editStage !== "") {
      setEditStage("");
    } else {
      setStage((prev) => prev - 1);
    }
  };
  const nextEditStageHandler = (stage) => {
    setEditStage(stage);
  };
  useEffect(() => {
    console.log(editStage)
    if (editStage !== "") setTitle(editStageTitle[editStage]);
    else setTitle(stagesTitle[stage]);
  }, [stage, editStage]);

  useEffect(() => {}, []);
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
        return (
          <CheckoutPlaceOrder
            nextStageHandler={nextStageHandler}
            nextEditStageHandler={nextEditStageHandler}
            editStage={editStage}
          />
        );
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
