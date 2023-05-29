import React, { useState } from 'react'

export default function SimpleForm() {

 const [data,setData]  =  useState({
        firstname: "",
        lastname : ""
    })

    const handleSubmit = (e)=>{ 

            e.preventDefault();

            console.log(data);
    }

    const handelChangeForFirstName = (e)=> {

    
        setData({...data,"firstname": e.target.value})
    }

    const handelChangeForLasttName = (e)=> {

        setData({...data,"lastname": e.target.value})
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type='text' value={data.firstname} onChange={handelChangeForFirstName} />

            <input type='text' value={data.lastname} onChange={handelChangeForLasttName} />


            <button type='submit'>SaveData</button>



        </form>

    </div>
  )
}
