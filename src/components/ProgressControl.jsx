import React from "react";
import { useContext } from "react";
import { PaymentContext } from "../contexts/PaymentContext";
import { CartContext } from "../contexts/CartContext";

import { ReactComponent as LeftArrow } from "./icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "./icons/right-arrow.svg";

const ProgressControl = ({ stepData, setStepData }) => {
  const products = useContext(CartContext)[0];
  function showTotalPrice(products) {
    let totalPrice = 0;
    products.forEach((p) => {
      totalPrice += p.price * p.quantity;
    });
    return totalPrice;
  }

  const paymentInfo = useContext(PaymentContext);
  function handleNextStep() {
    if (stepData === "step1") {
      setStepData("step2");
    } else if (stepData === "step2") {
      setStepData("step3");
    } else {
      setStepData(stepData);
      console.log(paymentInfo[0]);
      console.log(`Total price is $${showTotalPrice(products)}`);
    }
  }

  function handlePrevStep() {
    if (stepData === "step3") {
      setStepData("step2");
    } else if (stepData === "step2") {
      setStepData("step1");
    } else {
      setStepData(stepData);
    }
  }

  return (
    <>
      {stepData === "step1" && (
        <div className="ProgressControl">
          <button className="prevStep none">
            <LeftArrow className="leftArrow" /> 上一步
          </button>
          <button className="nextStep" onClick={handleNextStep}>
            下一步 <RightArrow className="rightArrow" />
          </button>
        </div>
      )}

      {stepData === "step2" && (
        <div className="ProgressControl">
          <button className="prevStep" onClick={handlePrevStep}>
            <LeftArrow className="leftArrow" /> 上一步
          </button>
          <button className="nextStep" onClick={handleNextStep}>
            下一步 <RightArrow className="rightArrow" />
          </button>
        </div>
      )}

      {stepData === "step3" && (
        <div className="ProgressControl">
          <button className="prevStep" onClick={handlePrevStep}>
            <LeftArrow className="leftArrow" /> 上一步
          </button>
          <button className="nextStep" onClick={handleNextStep}>
            確認下單
          </button>
        </div>
      )}
    </>
  );
};

export default ProgressControl;
