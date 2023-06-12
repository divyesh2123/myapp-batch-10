import React, { useMemo, useState } from 'react'

export default function ReadMore({text}) {


   const [readMore,setReadMore] = useState(true);

//    const trucText = ()=> {

//     console.log("This is the called every time")

   
//    }

  const trucText = useMemo(()=>{

    console.log("This is the value recal");

    return text.slice(0,31);

   })


  return (
    <div onClick={()=> {
        setReadMore(!readMore)
    }}>
        
        {readMore? trucText : text}

    </div>
  )
}
