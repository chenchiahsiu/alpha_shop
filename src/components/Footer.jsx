import React from "react";
import { ReactComponent as Logo } from "./icons/logo.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Instagram } from "./icons/instagram.svg";
import { ReactComponent as Whatsapp } from "./icons/whatsapp.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo-name">
        <Logo className="logo" alt="logo" />
      </div>
      <div className="section">
        <ul>
          <div className="section-title">客戶服務</div>
          <li>
            <a href="#">運送說明</a>
          </li>
          <li>
            <a href="#">退換貨相關</a>
          </li>
          <li>
            <a href="#">付款資訊</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="section">
        <ul>
          <div className="section-title">關於我們</div>
          <li>
            <a href="#">品牌故事</a>
          </li>
          <li>
            <a href="#">媒體連繫</a>
          </li>
          <li>
            <a href="#">Press kit</a>
          </li>
        </ul>
      </div>
      <div className="section">
        <ul>
          <div className="section-title">資訊</div>
          <li>
            <a href="#">隱私權政策</a>
          </li>
          <li>
            <a href="#">Cookie</a>
          </li>
          <li>
            <a href="#">GDPR</a>
          </li>
        </ul>
      </div>
      <div className="section">
        <ul>
          <div className="section-title">追蹤 ALPHA Shop</div>
          <li>
            <a href="#">+886 02123-45678</a>
          </li>
          <li>
            <a href="#">
              <Facebook className="mediaIcon"></Facebook>
            </a>
            <a href="#">
              <Instagram className="mediaIcon"></Instagram>
            </a>
            <a href="#">
              <Whatsapp className="mediaIcon"></Whatsapp>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
