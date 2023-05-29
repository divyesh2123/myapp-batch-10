import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function DisplayPosts() {

   const [data,setData]= useState([]);

   useEffect(()=> {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(y=> {

        console.log(y);
        setData(y.data);
    })

   },[])

  return (
    <table>{
        data.map((value)=> {

            return (<tr><td>{value.title}</td><td>{value.body}</td><td>{value.userId}</td></tr>)

        })
        
        
        
        }</table>
  )
}
