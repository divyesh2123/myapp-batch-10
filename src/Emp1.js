import React, { useState } from 'react'
import Child1 from './Child1'
import Child4 from './Child4'

export default function Emp1() {
    
    const [data,setData] = useState({
        firstName : 'div',
        lastName : 'patel'
    })
  return (
    <div>
        <Child1 name={data}/>
        
    </div>
  )
}
