import React, { useState } from 'react'
import MyChild1 from './MyChild1'

export default function EmployeeMy() {

  const [mydata,setData] =  useState({
        firstName : "weltec",
        lastName : "Test1",
        Address : {
            City : "Vadodara"
        }
    })
  return (
    <div>
        <MyChild1 data={mydata} />
    </div>
  )
}
