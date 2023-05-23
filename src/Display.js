import React from 'react'
import mydata from './data';

export default function Display() {
  return (
    <div>{mydata.map((value)=> {
        return (<div>{value.name}</div>)
    })}</div>
  )
}
