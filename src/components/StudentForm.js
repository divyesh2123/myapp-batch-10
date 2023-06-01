import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function StudentForm(props) {

  const [form,setform] = useState({
    firstName : "",
    lastName  : "",
    address :  {

      city : "",
      state : ""
    }
  })

  const changeHandelr = (e)=> {

    if(e.target.name.includes('.'))
    {
      let d = {...form,[e.target.name.split(".")[0]]: { 
        ...form[e.target.name.split(".")[0]],
         [e.target.name.split(".")[1]] : e.target.value}};

      setform(d);
    }
    else
    {
      let d = {...form,[e.target.name] : e.target.value};

      setform(d);

    }

  
  }

  const handleSave = ()=> {

    console.log(form);

    let t = [...props.data];
    t.push({...form, id: t.length + 1});

    props.setData(t);
    props.handleClose();

  }

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
    <DialogTitle>Student Information</DialogTitle>
    <DialogContent>
      <DialogContentText>
      Please Fill Details
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="fname"
        label="First Name"
        type="text"
        name = "firstName"
        fullWidth
        variant="standard"

        onChange={changeHandelr}
      />
       <TextField
        autoFocus
        margin="dense"
        id="lname"
        label="Last Name"
        name = "lastName"
        type="text"
        fullWidth
        variant="standard"
        onChange={changeHandelr}
      />

<TextField
        autoFocus
        margin="dense"
        id="address.city"
        name ="address.city"
        label="City"
        type="email"
        fullWidth
        variant="standard"
        onChange={changeHandelr}
      />

<TextField
        autoFocus
        margin="dense"
        id="address.state"
        name ="address.state"
        label="state"
        type="text"
        fullWidth
        variant="standard"
        onChange={changeHandelr}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={props.handleClose}>Cancel</Button>
    </DialogActions>
  </Dialog>
  )
}
