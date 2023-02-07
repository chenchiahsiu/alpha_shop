import React from "react";

const Step1 = () => {
  return (
    <div className="step1">
      <h1>寄送地址</h1>
      <div className="information">
        <div className="information-row1 row">
          <div className="information-item text-left">
            <label>稱謂</label>
            <div className="select-wrapper">
              <select>
                <option value="male">先生</option>
                <option value="female">女士</option>
              </select>
            </div>
          </div>
          <div className="information-item text-right">
            <label>姓名</label>
            <input type="text" placeholder="請輸入姓名"></input>
          </div>
        </div>
        <div className="information-row2 row">
          <div className="information-item text-left">
            <label>電話</label>
            <input type="text" placeholder="請輸入行動電話"></input>
          </div>
          <div className="information-item text-right">
            <label>Email</label>
            <input type="email" placeholder="請輸入電子郵件"></input>
          </div>
        </div>
        <div className="information-row3 row">
          <div className="information-item text-left">
            <label>縣市</label>
            <div className="select-wrapper">
              <select>
                <option value="">請選擇縣市</option>
                <option value="KLU">基隆市</option>
                <option value="TPH">新北市</option>
                <option value="TPE">臺北市</option>
                <option value="TYC">桃園市</option>
                <option value="HSH">新竹縣</option>
                <option value="HSC">新竹市</option>
                <option value="MAC">苗栗市</option>
                <option value="MAL">苗栗縣</option>
                <option value="TXG">臺中市</option>
                <option value="CWH">彰化縣</option>
                <option value="CWS">彰化市</option>
                <option value="NTC">南投市</option>
                <option value="NTO">南投縣</option>
                <option value="YLH">雲林縣</option>
                <option value="CHY">嘉義縣</option>
                <option value="CYI">嘉義市</option>
                <option value="TNN">臺南市</option>
                <option value="KHH">高雄市</option>
                <option value="IUH">屏東縣</option>
                <option value="PTS">屏東市</option>
                <option value="ILN">宜蘭縣</option>
                <option value="ILC">宜蘭市</option>
                <option value="HWA">花蓮縣</option>
                <option value="HWC">花蓮市</option>
                <option value="TTC">臺東市</option>
                <option value="TTT">臺東縣</option>
                <option value="PEH">澎湖縣</option>
                <option value="KMN">金門縣</option>
                <option value="LNN">連江縣</option>
              </select>
            </div>
          </div>
          <div className="information-item text-right">
            <label>地址</label>
            <input type="text" placeholder="請輸入地址"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
