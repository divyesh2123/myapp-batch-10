import React from 'react'

export default function FormatAddress(prop) {

    console.log(prop.address)
  return (
    <p>{prop.address.street},{prop.address.suite},{prop.address.city},{prop.address.zipcode}</p>
  )
}
