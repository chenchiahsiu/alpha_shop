import React from "react";

const StepProgress = ({ stepData, setStepData }) => {
  return (
    <div>
      <h1>結帳</h1>
      <div className="step-container">
        <div className="step active">
          <div
            className={
              !(stepData === "step1")
                ? "circle-container checked"
                : "circle-container"
            }
          ></div>
          <div className="label-container">寄送地址</div>
          <span className="connect-line active"></span>
        </div>
        <div className={!(stepData === "step1") ? "step active" : "step"}>
          <div
            className={
              stepData === "step3"
                ? "circle-container checked"
                : "circle-container"
            }
          ></div>
          <div className="label-container">運送方式</div>
          <span
            className={
              !(stepData === "step1") ? "connect-line active" : "connect-line"
            }
          ></span>
        </div>
        <div className={stepData === "step3" ? "step active" : "step"}>
          <div className="circle-container"></div>
          <div className="label-container">付款資訊</div>
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
