import React from "react";

const Step3 = () => {
  return (
    <div className="step3">
      <h1>付款資訊</h1>
      <div className="cardInformation">
        <div className="cardInformation-row1 row">
          <label>持卡人姓名</label>
          <input type="text"></input>
        </div>
        <div className="cardInformation-row2 row">
          <label>卡號</label>
          <input type="text"></input>
        </div>
        <div className="cardInformation-row3">
          <div className="text-left text">
            <label>有效期限</label>
            <input type="text"></input>
          </div>
          <div className="text-right text">
            <label>CVC / CCV</label>
            <input type="text" className="cvc"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
