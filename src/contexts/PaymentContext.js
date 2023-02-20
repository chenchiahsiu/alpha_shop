import { createContext } from "react";

export const initialPaymentData = {
  cardOwner: null,
  cardNumber: null,
  cardValidDate: null,
  cardCVC: null,
};

export const PaymentContext = createContext(initialPaymentData);
