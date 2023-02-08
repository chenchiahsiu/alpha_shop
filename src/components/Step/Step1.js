import React from "react";

const Step1 = () => {
  function CitySelect() {
    const cities = [
      { value: "", name: "請選擇縣市" },
      { value: "KLU", name: "基隆市" },
      { value: "TPH", name: "新北市" },
      { value: "TPE", name: "臺北市" },
      { value: "TYC", name: "桃園市" },
      { value: "HSH", name: "新竹縣" },
      { value: "HSC", name: "新竹市" },
      { value: "MAC", name: "苗栗市" },
      { value: "MAL", name: "苗栗縣" },
      { value: "TXG", name: "臺中市" },
      { value: "CWH", name: "彰化縣" },
      { value: "CWS", name: "彰化市" },
      { value: "NTC", name: "南投市" },
      { value: "NTO", name: "南投縣" },
      { value: "YLH", name: "雲林縣" },
      { value: "CHY", name: "嘉義縣" },
      { value: "CHI", name: "嘉義市" },
      { value: "TNN", name: "臺南市" },
      { value: "KHH", name: "高雄市" },
      { value: "IUH", name: "屏東縣" },
      { value: "PTS", name: "屏東市" },
      { value: "ILN", name: "宜蘭縣" },
      { value: "ILC", name: "宜蘭市" },
      { value: "HWA", name: "花蓮縣" },
      { value: "HWC", name: "花蓮市" },
      { value: "TTC", name: "臺東市" },
      { value: "TTT", name: "臺東縣" },
      { value: "PEH", name: "澎湖縣" },
      { value: "KMN", name: "金門縣" },
      { value: "LNN", name: "連江縣" },
    ];
    return (
      <select required>
        {cities.map((city) => {
          return (
            <option value={city.value} key={city.value}>
              {city.name}
            </option>
          );
        })}
      </select>
    );
  }

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
              <CitySelect />
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
