import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getProduct } from './action/proudctaction';

export default function Product() {

    const pr= useSelector(y=>y.products)

    const dis = useDispatch();

    console.log(pr)

    useEffect(()=> {

        fetch("https://fakestoreapi.com/products")
        .then(y=>y.json())
        .then(y=> {

            dis(getProduct(y))

        })
    })
  return (
    <div>{
        pr.items.map((y)=> {

            return(<div>{y.title}</div>)
        })
        
        }</div>
  )
}
