import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  authFetch  from './axiosbase/authInterseptor'
import { redirect } from 'react-router-dom'

export default function DisplayDataWithToken() {

   const [data,setData] = useState([])

   useEffect(()=> {

    try
    {
    authFetch.get("/accounts")
    .then(y=> {
        setData(y.data);

        console.log(y.data)
    }).catch(y=> {
        console.log(y);
    })

}
catch(err)
{

}

   },[])
  return (
    <div>DisplayDataWithToken</div>
  )
}
