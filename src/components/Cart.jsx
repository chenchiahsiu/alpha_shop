import React from "react";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";

import { ReactComponent as MinusIcon } from "./icons/minus.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";

export default function Cart() {
  const [products, setProducts] = useState(CartContext);
  const [totalPrice, setTotalPrice] = useState(300);

  // function handleMinus(productId) {
  //   let changeTotalPrice = 0;
  //   let changeProductCount = products.map((p) => {
  //     if (p.id === productId && p.quantity > 0) {
  //       return {
  //         ...p,
  //         quantity: p.quantity - 1,
  //       };
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

  // function handlePlus(productId) {
  //   let changeTotalPrice = 0;
  //   let changeProductCount = products.map((p) => {
  //     if (p.id === productId) {
  //       return {
  //         ...p,
  //         quantity: p.quantity + 1,
  //       };
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

  // 以下是方法二: 將上面 2 個 function 統整寫在一個 function
  function handleShoppingItem(productId, action) {
    let changeTotalPrice = 0;
    let changeProductCount = products.map((p) => {
      if (p.id === productId && p.quantity > 0) {
        return {
          ...p,
          quantity: action === "minus" ? p.quantity - 1 : p.quantity + 1,
        };
      } else {
        return p;
      }
    });
    changeProductCount.forEach((p) => {
      changeTotalPrice += p.price * p.quantity;
    });
    changeProductCount = changeProductCount.filter((p) => p.quantity > 0);
    setTotalPrice(changeTotalPrice);
    setProducts(changeProductCount);
  }

  const listItems = products.map((product) => (
    <li key={product.id}>
      <img src={product.img} alt={product.name} />
      <div className="product-container">
        <span className="product-name">{product.name}</span>
        <div className="choose-count">
          <MinusIcon
            className="minus-icon"
            onClick={() => {
              handleShoppingItem(product.id, "minus");
            }}
          />
          <span className="product-count">{product.quantity}</span>
          <PlusIcon
            className="plus-icon"
            onClick={() => {
              handleShoppingItem(product.id, "plus");
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
