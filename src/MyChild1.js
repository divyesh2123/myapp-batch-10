import React from 'react'
import MyChild2 from './MyChild2'

export default function MyChild1({data}) {
  return (
    <div>
        <MyChild2 mydata={data}/>
    </div>
  )
}
