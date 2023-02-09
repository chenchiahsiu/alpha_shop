import React from "react";
import { ReactComponent as Logo } from "./icons/logo.svg";
import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as Cart } from "./icons/cart.svg";
import { ReactComponent as Moon } from "./icons/moon.svg";

const Header = () => {
  return (
    <header>
      <div className="logo-name">
        <a href="#">
          <Logo className="logo" alt="logo" />
        </a>
      </div>
      <nav>
        <div className="left-side">
          <ul>
            <li>
              <a href="#">男款</a>
            </li>
            <li>
              <a href="#">女款</a>
            </li>
            <li>
              <a href="#">最新消息</a>
            </li>
            <li>
              <a href="#">客製商品</a>
            </li>
            <li>
              <a href="#">聯絡我們</a>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <ul>
            <li>
              <a href="#">
                <Search className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <Cart className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <Moon className="nav-icon-moon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
