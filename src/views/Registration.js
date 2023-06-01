import { Box, Button, Checkbox, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

export default function Registration() {

    const [form,setForm] = useState({
        firstName : "",
        lastName: "",
        email : "",
        userName: "",
        password : "",
        confirmPassword : "",
        acceptTerms : false,
        title :""
    })

    const handleChange=  (e)=> {

        if(e.target.type == "checkbox")
        {
         

            setForm({...form,[e.target.name] : e.target.checked});
        }
        else
        {
        setForm({...form,[e.target.name] : e.target.value});
        }

    }

    const handleSubmit = ()=>{ 

        console.log(form);

      

        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",form).then(y=> {

          console.log(y);
        }).catch(y=> {
          console.log(y);
        })
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

<div>
        <TextField
          required
          id="outlined-required"
          label="Title"
         
          name="title"
          variant='standard'

          onChange={handleChange}
        />

        </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Firstname"
         
          name="firstName"
          variant='standard'

          onChange={handleChange}
        />

<TextField
          required
          id="outlined-required"
          label="last Name"
         
          name="lastName"
          variant='standard'
          onChange={handleChange}
        />
       
      </div>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
         
          name="email"
          variant='standard'
          onChange={handleChange}
        />

<TextField
          required
          id="outlined-required"
          label="User Name"
         
          name="userName"
          variant='standard'
          onChange={handleChange}
        />
       
      </div>


      <div>
        <TextField
          required
          id="outlined-required"
          label="Password"
         
          name="password"
          variant='standard'
          onChange={handleChange}
        />

<TextField
          required
          id="outlined-required"
          label="Confirmed Password"
         
          name="confirmPassword"
          variant='standard'
          onChange={handleChange}
        />
       
      </div>

      <div>

        Accept terms

      <Checkbox

name='acceptTerms'
onClick={handleChange}


/>


      </div>

      <div>
      <Button variant="outlined" onClick={handleSubmit}>Save</Button>

      </div>
    </Box>
  )
}
