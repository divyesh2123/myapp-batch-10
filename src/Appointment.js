import React, { useState } from 'react'
import AppointmentDisplay from './AppointmentDisplay'
import AppointmentForm from './AppointmentForm'
import Button from '@mui/material/Button';
export default function Appointment() {

    const [open, setOpen] = React.useState(false);

    const [data,setData] = useState([]);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
      };

      const removeItem = (id)=> {

        let d = [...data].filter((value)=> {

          return value.id != id;

        });

        setData(d);

      }
    
  
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
       Add Appointment
      </Button>
            <AppointmentForm open={open} onClose={handleClickClose}
            
            data={data}
            setData={setData}

            />
        
            <AppointmentDisplay data={data} remove={removeItem}/>
         

    </div>
  )
}
