import React from 'react'
import { useState } from 'react'
import { CartContext, initialProducts } from '../contexts/CartContext'
import { PaymentContext, initialPaymentData } from '../contexts/PaymentContext'

import StepProgress from './StepProgress'
import Step1 from './Step/Step1'
import Step2 from './Step/Step2'
import Step3 from './Step/Step3'
import ProgressControl from './ProgressControl'
import Cart from './Cart'

const Main = () => {
  const [stepData, setStepData] = useState('step1')
  const [products, setProducts] = useState(initialProducts)
  const [paymentData, setPaymentData] = useState(initialPaymentData)
  return (
    <div className="main">
      <CartContext.Provider value={[products, setProducts]}>
        <div className="left-section">
          <StepProgress stepData={stepData} setStepData={setStepData} />
          {stepData === 'step1' && <Step1 />}
          {stepData === 'step2' && <Step2 />}
          <PaymentContext.Provider value={[paymentData, setPaymentData]}>
            {stepData === 'step3' && <Step3 />}
            <ProgressControl stepData={stepData} setStepData={setStepData} />
          </PaymentContext.Provider>
        </div>
        <div className="right-section">
          <Cart />
        </div>
      </CartContext.Provider>
    </div>
  )
}

export default Main
