import React from 'react'

export default function Child4(props) {

    console.log(props);
  return (
    <div>{props.data.firstName}</div>
  )
}
