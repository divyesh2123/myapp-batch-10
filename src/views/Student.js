import React, { useState } from 'react'
import StudentForm from '../components/StudentForm'
import Button from '@mui/material/Button';
import StudentDisplay from '../components/StudentDisplay';
export default function Student() {


    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data,setData] = useState([]);

  return (
    <>

      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
        <StudentForm  handleClose={handleClose}
          open={open}  data={data}
           setData={setData}
           
           />

        <StudentDisplay mydata={data}/>
    
    
    </>
  )
}
