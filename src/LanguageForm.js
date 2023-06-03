import React, { useContext } from 'react'
import LanguageContext from './Context/LanguageContext'

export default function LanguageForm() {
  const {data}=  useContext(LanguageContext);

  const obj = {

        "en" : {


            firstname : "firstname",
            lastname : "lastname"
        },

        "gj" : {

            firstname : "પ્રથમ નામ",
            lastname : "છેલ્લું નામ"

        }



  }
  return (
    <div>
        
            <form>

                <label>

                    {obj[data].firstname}

                    

                </label>

                <input type='text' name="firstname" />

                <label>

{obj[data].lastname}



</label>

<input type='text' name="lastname" />


            </form>

    </div>
  )
}
