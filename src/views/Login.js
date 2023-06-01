import { TextField,Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {

   const [data,setData] = useState({
        email: "",
        password : ""
    })

    const handleSubmit =()=> {

        console.log(data);

        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data)
        .then(y=> {

            console.log(y);
            if(y.status == 200)
            {
                localStorage.setItem("token",y.data.jwtToken);
            }
        })

    }

    const handleChange = (e)=> {
        setData({...data,[e.target.name] : e.target.value});
    }
  return (
  <>

<TextField
    required
    id="outlined-required"
    label="email"
   
    name="email"
    variant='standard'

    onChange={handleChange}
  />

 

  <TextField
    required
    id="outlined-required"
    label="password"
   type='password'
    name="password"
    variant='standard'

    onChange={handleChange}
  />

<Button variant="outlined" onClick={handleSubmit}>Save</Button>
 
 </>

  )
}
