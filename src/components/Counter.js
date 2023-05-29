import React, { useState } from 'react'

export default function Counter() {

    alert("asdasd");


  const [count,setcount] =  useState(2)

   

    const increment = ()=> {

       setcount(count+1);

    }

    const decrement = ()=> {

        setcount(count-1);
 
     }

  return (
    <div>{count}
    
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
  )
}
