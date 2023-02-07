import React from "react";

const Step2 = () => {
  return (
    <div className="step2">
      <h1>運送方式</h1>
      <div className="deliver-container">
        <div className="deliver-item active">
          <div className="select">
            <input type="radio" value=""></input>
            <label>
              <span>標準運送</span>
              <span>約 3~7 個工作天</span>
            </label>
          </div>
          <span className="text">免費</span>
        </div>
        <div className="deliver-item">
          <div className="select">
            <input type="radio" value=""></input>
            <label>
              <span>DHL 貨運</span>
              <span>48 小時內送達</span>
            </label>
          </div>
          <span className="text">$500</span>
        </div>
      </div>
    </div>
  );
};

export default Step2;
