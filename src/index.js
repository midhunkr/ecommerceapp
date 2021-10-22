import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { LoginContextProvider } from './Context/loginContext';
import { CartContextProvider } from './Context/cartContext';
import { WishListContextProvider } from './Context/wishListContext';

ReactDOM.render(
  <BrowserRouter>

   <LoginContextProvider>
    <CartContextProvider>
      <WishListContextProvider>
      <App />
      </WishListContextProvider>
      </CartContextProvider>
   </LoginContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
