import React, { useState } from 'react'
import MyLanguage from './LangContext/MyLanguageContext'
import MyHeader from './MyHeader'
import MyForm from './MyForm'
import ReadMore from './ReadMore'

export default function Layout() {

  const [lan,sentlan] = useState('en')
  return (
    <div>
        <MyLanguage.Provider value={{lan,sentlan}}>


            <MyHeader/>
            <MyForm/>

            <ReadMore text="This is the text This is the tex This is the tex  This is the tex This is the tex This is the tex This is the tex This is the tex This is the tex This is the tex This is the tex This is the tex "/>
        </MyLanguage.Provider>

    </div>
  )
}
