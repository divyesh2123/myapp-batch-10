import React, { useState } from 'react'
import DisplayName from './DisplayName';

export default function Test() {

   const [name,setName] = useState();

   const [data,setData] = useState([]);

   const handleChange = (e)=> {

        setName(e.target.value)

   }

   const SubmitHandler = ()=> {

    let d= [...data];
    d.push(name);
    setData(d);
   }

   const deleteData = ()=> {

   }

   const mycallback = React.useCallback(()=> {

    deleteData();

   },[])

   
  return (
    <div>

        <input type='text'  onChange={handleChange}/>

        <button onClick={SubmitHandler}>ADd</button>

        <DisplayName arr={data} del={mycallback}/>

    </div>
  )
}
