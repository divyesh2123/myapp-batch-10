import React, { useContext } from 'react'

import MyLanguage from './LangContext/MyLanguageContext'

export default function MyForm() {

  const {lan} =  useContext(MyLanguage);

  const lanInfo = {

        "en" : {

            firstName : "FirstName",
            lastName : "LastName"

        },

        "gj" : {

            firstName : "પ્રથમ નામ",
            lastName : "છેલ્લું નામ"

        }



  }
  return (
    <div>

            <form>

                    <label>

                        {lanInfo[lan].firstName}
                    </label>

                    <input type='text' placeholder= {lanInfo[lan].firstName}/>


                    <label>

                        {lanInfo[lan].lastName}
                    </label>

                    <input type='text' placeholder= {lanInfo[lan].lastName}/>


            </form>

    </div>
  )
}
