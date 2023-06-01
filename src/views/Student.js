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

  const handleDelete = (id)=> {

    let my = [...data].filter(y=> {
      return y.id != id;
    })

    setData(my);

  }

  const editValues = (id) => {

    setEdit(id);
    setOpen(true);
  }

  const [data,setData] = useState([]);

  const [edit,setEdit] = useState(-1);



  return (
    <>

      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
        <StudentForm  handleClose={handleClose}
          open={open}  data={data}
           setData={setData}

           editID = {edit}

           setEdit={setEdit}
           
           />

        <StudentDisplay mydata={data} myd = {handleDelete} t={editValues}/>
    
    
    </>
  )
}
