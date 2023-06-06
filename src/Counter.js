import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './action/counteraction';

export default function Counter() {

   const counter =  useSelector(y=>y);

   const dis = useDispatch();

   const inp = ()=> {

    dis(Increment());

   }

   const ind = ()=> {

    dis(Decrement());

   }
  return (
    <div>{counter}
    
        <button onClick={inp}>+</button>
        <button onClick={ind}>-</button>
    
    </div>
  )
}
