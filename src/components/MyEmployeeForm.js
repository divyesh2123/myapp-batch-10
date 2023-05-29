import React, { useState } from 'react'
import EmployeeList from './EmployeeList'

export default function MyEmployeeForm() {

  const [data,setData] =  useState([]);

  const [form,setForm] = useState({
    firstName : "",
    lastName : ""
  })

  const handleSubmit = (e)=> {

    e.preventDefault();

    let d = [...data];

    d.push(form);

    setData(d);

    console.log(form);

  }

  const handleChange =(e)=> {

    setForm({...form,[e.target.name] : e.target.value})

  }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>

          <input type='text'  name="firstName" onChange={handleChange}/>

          <input type='text'  name="lastName" onChange={handleChange}/>

          <input type='submit' value="save" />
      </form>


      <EmployeeList  mydata={data}/>
    </div>
  )
}
