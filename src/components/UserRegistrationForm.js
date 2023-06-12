import React from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik'
import axios from 'axios'
import * as Yup from 'yup';


export default function UserRegistrationForm() {

  const validationSchemas = () => {

         return Yup.object().shape({

      title:  Yup.string().required('title is required').
      oneOf(["MR","MISS","MRS","MS"], "Please Enter the valid value"),

      firstName: Yup.string().required("Please Enter FirstName")
                      .min(3,"Please enter correct value")
                      .max(12,"Please Enter Valid name in range of 12"),

      lastName: Yup.string().required("Please Enter lastName")
      .min(3,"Please enter correct value")
      .max(12,"Please Enter Valid name in range of 12"),

      email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
      
    password: Yup.string()
      
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(18, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),

      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')

    })

  }
  
 
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
  acceptTerms: true,
 
}





    }

    validationSchema={validationSchemas}

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
    <ErrorMessage name='title' component="div"/>
    <Field name="firstName"/>
    <ErrorMessage name='firstName' component="div"/>
    <Field name="lastName"/>

    <ErrorMessage name='lastName' component="div"/>
    <Field name="email"/>
    <ErrorMessage name='email' component="div"/>
    <Field name="userName"/>
    <Field name="password"/>
    <ErrorMessage name='password' component="div"/>
    <Field name="confirmPassword"/>
    <ErrorMessage name='confirmPassword' component="div"/>
    <Field name="acceptTerms" type="checkbox"/>
    <ErrorMessage name='acceptTerms' component="div"/>
    <button type="submit">Submit</button>

    </Form>


    </Formik>
  )
}
