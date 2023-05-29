import React from 'react'

import mydata from '../data'

export default function ReviewData() {
  return (
  <>
  {
    mydata.map((value)=> {

        return (<div className="card" style={{width: "400px"}}>
        <img className="card-img-top" src={value.image} alt="Card image"/>
        <div className="card-body">
          <h4 className="card-title">{value.name}</h4>
          <p className="card-text">{value.age}</p>
          <a href="#" className="btn btn-primary">View Profile</a>
        </div>
      </div>)

    })


  }</>
  )
}
