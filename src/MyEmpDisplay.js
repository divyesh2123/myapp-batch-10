import React,{memo} from 'react'

 function MyEmpDisplay(props) {

    console.log(props);
  return (
    <div>MyEmpDisplay</div>
  )
}

// export default memo(MyEmpDisplay,(pre,next)=> {

//     if(pre.myt.data.length == next.myt.data.length)
//     {
//         return true;
//     }

//     return false;   

// });

export default memo(MyEmpDisplay);