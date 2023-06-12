import { useFormik } from 'formik'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import * as Yup from 'yup';


export default function UserLoginForm() {

  const validationSchemas = () => {

    return Yup.object().shape({



 email: Yup.string()
 .required('Email is required')
 .email('Email is invalid'),
 
password: Yup.string()
 
 .required('Password is required')
 .min(6, 'Password must be at least 6 characters')
 .max(18, 'Password must not exceed 40 characters'),


})

}


   const formik = useFormik({

        initialValues : {

            email: "",
            password: ""
        },
        validationSchema:validationSchemas,
        onSubmit : async (values) => {
          
            console.log(values);

          }

    })
  return (
    <form onSubmit={formik.handleSubmit}>

<TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          helperText={formik.touched.email ? formik.errors.email : ""}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onChange={formik.handleChange}
         
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          helperText={formik.touched.password ? formik.errors.password : ""}
          error={formik.touched.password && Boolean(formik.errors.password)}
          value={formik.values.password}
          onChange={formik.handleChange}
         
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>


    </form>
  )
}
