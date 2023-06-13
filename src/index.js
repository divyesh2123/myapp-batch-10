import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import UserLogin from './views/UserLogin';
import { Provider } from "react-redux";
import Users from './views/Users';
import ShowMoreTextToggle from './views/ShowMoreTextToggle';
import Test from './Test';
import Emp1 from './Emp1';
import LanguageContext from './Context/LanguageContext';
import EmployeeFullForm from './EmployeeFullForm';
import store from './store/store';
import Counter from './Counter';
import UserRegistrationForm from './components/UserRegistrationForm';
import Product from './Product';
import UserList from './UserList';
import EmployeeMy from './EmployeeMy';
import Layout from './Layout';
import UserLoginForm from './components/UserLoginForm';
import MyEmp from './MyEmp';
import Button from './views/Button';
import Student from './views/Student';
import Appointment from './Appointment';
import CounterSaga from './views/CounterSaga';
// import  './axiosbase/global'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>

  
  {/* <UserList/> */}



  <CounterSaga/>

  
</Provider>

   
{/* <Emp1/> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
