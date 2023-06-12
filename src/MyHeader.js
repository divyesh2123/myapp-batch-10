import React, { useContext } from 'react'
import MyLanguage from './LangContext/MyLanguageContext'

export default function MyHeader() {

   const {lan,sentlan} = useContext(MyLanguage)

   const handleChange = (e)=> {

    sentlan(e.target.value)

   }
  return (
    <div>

        <select onChange={handleChange}>

                <option value='en'>English</option>
                <option value='gj'>Gujrati</option>

        </select>

    </div>
  )
}
