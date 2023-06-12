import React from 'react'
import MyChild3 from './MyChild3'

export default function MyChild2({mydata}) {
  return (
    <div>
        
        <MyChild3 data={mydata}/>
    </div>
  )
}
