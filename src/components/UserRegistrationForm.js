import React from 'react'
import {Formik,Form,Field} from 'formik'
import axios from 'axios'


export default function UserRegistrationForm() {
  
 
  return (
    <Formik
    
    initialValues={
{
  title:"",
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  password : "",
  confirmPassword : "",
  acceptTerms: true
}


    }

    onSubmit={ async(values) => {


      console.log(values);
    //  let d =  
    //  await axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",
    //  values);

    //   console.log(d.data);

    //   if(d.status == 200)
    //   {

    //   navi("/login");
    
    //   }

    }}
    >

    <Form>
    <Field name="title" />
    <Field name="firstName"/>
    <Field name="lastName"/>
    <Field name="email"/>
    <Field name="userName"/>
    <Field name="password"/>
    <Field name="confirmPassword"/>
    <Field name="acceptTerms" type="checkbox"/>

    <button type="submit">Submit</button>

    </Form>


    </Formik>
  )
}
