import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableRow from '../components/TableRow';

export default function Users() {

   const[data,setData] = useState([])

   useEffect(()=> {


    axios.get("https://jsonplaceholder.typicode.com/users").then(y=> {

    setData(y.data);
    })


   }


   ,[])
  return (
    <table>

        {
            data.map((value,index)=> {

                return(<TableRow   uservalue={value}  userIndex={index} />)

            })

        }

    </table>
  )
}
