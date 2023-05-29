import React, { useEffect, useState } from 'react'

export default function DisplayDataFromAPI() {

   let [data,setData] = useState([]);

   useEffect(()=> {

    fetch("https://fakestoreapi.com/products").then(y=>y.json())
    .then(y=> {
    
 
 setData(y);
    })


   },[])

  
  return (
    <div>{
        data.map((value)=> {

            return (<div>{value.title}</div>)
        })
    
        
        }</div>
  )
}
