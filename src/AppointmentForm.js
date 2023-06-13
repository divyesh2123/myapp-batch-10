import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';

export default function AppointmentForm(props) {


   const formik = useFormik({
        initialValues : {

            firstName : "",
            lastName : "",
            city : "",
            state: "",
            address1: "",
            address2: ""
        },

        onSubmit :   (values)=> {

            console.log(values);
            props.onClose();

        }


        
        
    })
  return (
    <Dialog open={props.open} onClose={props.onClose}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>

     
      <TextField
        autoFocus
        margin="dense"
        id="firstName"
        label="first Name"
        type="text"
        value={formik.values.firstName}
        fullWidth
        variant="standard"
        onChange={formik.handleChange}
        name="firstName"
      />
       <TextField
        autoFocus
        margin="dense"
        id="lastName"
        label="last Name"
        type="text"
        value={formik.values.lastName}
        fullWidth
        variant="standard"
        name='lastName'
        onChange={formik.handleChange}
      />
       <TextField
        autoFocus
        margin="dense"
        id="city"
        label="city"
        type="text"
        name='city'
        value={formik.values.city}
        fullWidth
        variant="standard"
        onChange={formik.handleChange}
      />
       <TextField
        autoFocus
        margin="dense"
        id="state"
        label="state"
        type="text"
        name='state'
        value={formik.values.state}
        fullWidth
        variant="standard"
        onChange={formik.handleChange}
      />
       <TextField
        autoFocus
        margin="dense"
        id="address1"
        name='address1'
        label="address1"
        type="text"
        value={formik.values.address1}
        fullWidth
        variant="standard"
        onChange={formik.handleChange}
      />
       <TextField
        autoFocus
        margin="dense"
        id="address2"
        label="address2"
        name='address2'
        type="text"
        value={formik.values.address2}
        fullWidth
        variant="standard"
        onChange={formik.handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.onClose}>Cancel</Button>
      <Button  onClick={formik.handleSubmit}>Save</Button>
    </DialogActions>
  </Dialog>
  )
}
