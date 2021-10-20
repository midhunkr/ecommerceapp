import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { LoginContextProvider } from './Context/loginContext';

ReactDOM.render(
  <BrowserRouter>
   <LoginContextProvider>
      <App />
   </LoginContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
