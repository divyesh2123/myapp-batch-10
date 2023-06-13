import React from 'react'
import AppointmentDisplay from './AppointmentDisplay'
import AppointmentForm from './AppointmentForm'
import Button from '@mui/material/Button';
export default function Appointment() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
       Add Appointment
      </Button>
            <AppointmentForm open={open} onClose={handleClickOpen} />
        
            <AppointmentDisplay/>
         

    </div>
  )
}
