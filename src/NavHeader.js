import React, { useContext } from 'react'
import LanguageContext from './Context/LanguageContext'

export default function NavHeader() {

   const {data,setData} = useContext(LanguageContext);

   const handleChange = (e)=> {
    
    setData(e.target.value);

   }

  return (
    <div>
        
        <select onChange={handleChange}>

            <option value="en">English</option>
            <option value="gj">Gujrati</option>

        </select>

    </div>
  )
}
