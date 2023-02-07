import React from "react";
import { useState } from "react";

import StepProgress from "./StepProgress";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";
import Step3 from "./Step/Step3";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";

const Main = () => {
  const [stepData, setStepData] = useState("step1");

  return (
    <div className="main">
      <div className="left-section">
        <StepProgress stepData={stepData} setStepData={setStepData} />
        {stepData === "step1" && <Step1 />}
        {stepData === "step2" && <Step2 />}
        {stepData === "step3" && <Step3 />}
        <ProgressControl stepData={stepData} setStepData={setStepData} />
      </div>
      <div className="right-section">
        <Cart />
      </div>
    </div>
  );
};

export default Main;
