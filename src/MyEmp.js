import React, { useCallback, useState } from 'react'
import MyEmpDisplay from './MyEmpDisplay';

export default function MyEmp() {

  const [data,setData] = useState([]);

  const [input,setInput] = useState('');

  const mychange = (e)=> {

    setInput(e.target.value)
  }


  

  const removeItem = useCallback(()=> {

  },[data])


  const saveInfo = ()=> {
    let d = [...data];
    d.push(input);
    setData(d);
  }
  return (
    <div>

            <input type='text' onChange={mychange}/>

            <input type='button' value="save" onClick={saveInfo}/>

            <MyEmpDisplay myt={data} re={removeItem}/>


    </div>
  )
}
