import React from 'react'

import {useDispatch} from 'react-redux'

export default function PostData() {

   const dis = useDispatch();

    const handle = ()=> {

        dis({type: 'REQ', payload: })

    }
  return (
    <div>PostData</div>
  )
}
