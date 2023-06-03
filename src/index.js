import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import UserLogin from './views/UserLogin';

import Users from './views/Users';
import ShowMoreTextToggle from './views/ShowMoreTextToggle';
import Test from './Test';
import Emp1 from './Emp1';
import LanguageContext from './Context/LanguageContext';
// import  './axiosbase/global'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App/> 

{/* <Emp1/> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
