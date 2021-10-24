import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { LoginContextProvider } from './Context/loginContext';
import { CartContextProvider } from './Context/cartContext';
import { WishListContextProvider } from './Context/wishListContext';
import { PaymentCardProvider } from './Context/cardContext';
import { OrderContextProvider } from './Context/orderContex';

ReactDOM.render(
  <BrowserRouter>


    <LoginContextProvider>
      <CartContextProvider>
        <WishListContextProvider>
          <PaymentCardProvider>
            <OrderContextProvider>
              <App />
            </OrderContextProvider>
          </PaymentCardProvider>
        </WishListContextProvider>
      </CartContextProvider>
    </LoginContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
