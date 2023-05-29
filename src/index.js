import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Display from './Display';
import ReviewData from './components/ReviewData';
import { Link ,BrowserRouter,Route,Routes} from 'react-router-dom'
import UserRegistration from './views/UserRegistration';
import Counter from './components/Counter';
import ReviewDataWithPagination from './components/ReviewDataWithPagination';
import UserLogin from './views/UserLogin';
import { StyledEngineProvider } from '@mui/material/styles'
import DisplayDataFromAPI from './components/DisplayDataFromAPI';
import SimpleForm from './components/SimpleForm';
import Employee from './views/Employee';
import Student from './views/Student';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    

    <BrowserRouter>

    <Routes>

      <Route path='/myemployee' element={<Employee></Employee>}/>
      <Route path='/login' element={<UserLogin></UserLogin>}></Route>
      <Route path='/' element={<UserRegistration></UserRegistration>}></Route>

      <Route path='/t' element={<Student></Student>}></Route>

    </Routes>

    

    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
