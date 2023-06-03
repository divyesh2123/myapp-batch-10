import logo from './logo.svg';
import './App.css';
import LanguageContext from './Context/LanguageContext';
import { useState } from 'react';
import NavHeader from './NavHeader';
import LanguageForm from './LanguageForm';

function App() {

  const [data,setData] = useState('en')
  return (
    <LanguageContext.Provider value={{ data,setData}}>

      

      <NavHeader/>

      <LanguageForm/>


    </LanguageContext.Provider>
  );
}

export default App;
