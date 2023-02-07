import React from "react";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";

import { ReactComponent as MinusIcon } from "./icons/minus.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";

export default function Cart() {
  const [products, setProducts] = useState(CartContext);
  const [totalPrice, setTotalPrice] = useState(300);

  function handleMinusClicked(productId) {
    let changeTotalPrice = 0;
    let changeProductCount = products.map((p) => {
      if (p.id === productId && p.quantity > 0) {
        return {
          ...p,
          quantity: p.quantity - 1,
        };
      } else {
        return p;
      }
    });
    changeProductCount.forEach((p) => {
      changeTotalPrice += p.price * p.quantity;
    });
    setTotalPrice(changeTotalPrice);
    setProducts(changeProductCount);
  }

  function handlePlusClicked(productId) {
    let changeTotalPrice = 0;
    let changeProductCount = products.map((p) => {
      if (p.id === productId) {
        return {
          ...p,
          quantity: p.quantity + 1,
        };
      } else {
        return p;
      }
    });
    changeProductCount.forEach((p) => {
      changeTotalPrice += p.price * p.quantity;
    });
    setTotalPrice(changeTotalPrice);
    setProducts(changeProductCount);
  }

  // 以下是方法二: 將上面 2 個 function 統整寫在一個 function
  // function handleProductCount(productId, eventTarget) {
  //   let changeTotalPrice = 0;
  //   let changeProductCount = products.map((p) => {
  //     if (p.id === productId) {
  //       const icon = eventTarget;
  //       if (icon.parentElement.classList.contains("plus-icon")) {
  //         return {
  //           ...p,
  //           quantity: p.quantity + 1,
  //         };
  //       } else if (
  //         icon.parentElement.classList.contains("minus-icon") &&
  //         p.quantity > 0
  //       ) {
  //         return {
  //           ...p,
  //           quantity: p.quantity - 1,
  //         };
  //       } else {
  //         return p;
  //       }
  //     } else {
  //       return p;
  //     }
  //   });
  //   changeProductCount.forEach((p) => {
  //     changeTotalPrice += p.price * p.quantity;
  //   });
  //   setTotalPrice(changeTotalPrice);
  //   setProducts(changeProductCount);
  // }

  const listItems = products.map((product) => (
    <li key={product.id}>
      <img src={product.img} alt={product.name} />
      <div className="product-container">
        <span className="product-name">{product.name}</span>
        <div className="choose-count">
          <MinusIcon
            className="minus-icon"
            onClick={() => {
              handleMinusClicked(product.id);
            }}
          />
          <span className="product-count">{product.quantity}</span>
          <PlusIcon
            className="plus-icon"
            onClick={() => {
              handlePlusClicked(product.id);
            }}
          />
        </div>
      </div>
      <div className="product-price">${product.price * product.quantity}</div>
    </li>
  ));

  return (
    <div className="shoppingCart">
      <h2>購物籃</h2>
      <div className="top-section">
        <ul>{listItems}</ul>
      </div>
      <div className="bottom-section">
        <div className="row">
          <span className="title">運費</span>
          <span className="price">免費</span>
        </div>
        <div className="row">
          <span className="title">小計</span>
          <span className="price">${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}
