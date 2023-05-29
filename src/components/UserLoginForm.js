import { useFormik } from 'formik'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';



export default function UserLoginForm() {

   const formik = useFormik({

        initialValues : {

            email: "",
            password: ""
        },
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
          onChange={formik.handleChange}
         
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
         
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>


    </form>
  )
}
