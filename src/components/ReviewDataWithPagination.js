import React, { useState } from 'react'
import mydata from '../data'
export default function ReviewDataWithPagination() {

  const [index,setIndex] = useState(0);

  const Next = ()=> {

    if(index < mydata.length-1)
    {
        setIndex(index+1)
    }
    else
    {
        setIndex(0)
    }

   
  }

  const Prev = ()=> {

    if(index <=0)
    {
        setIndex(mydata.length-1);
    }
    else
    {
    setIndex(index-1)
    }
  }
  return (
    <div>
        <div className="card" style={{width: "400px"}}>
        <img className="card-img-top" src={mydata[index]?.image} alt="Card image"/>
        <div className="card-body">
          <h4 className="card-title">{mydata[index]?.name}</h4>
          <p className="card-text">{mydata[index]?.age}</p>
          <a href="#" className="btn btn-primary">View Profile</a>
        </div>
      </div>

      <button type="button" class="btn btn-success" onClick={Prev}>Prev</button>
      <button type="button" class="btn btn-success" onClick={Next}>Next</button>
    </div>
  )
}
