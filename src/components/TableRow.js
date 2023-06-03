import React from 'react'
import FormatAddress from './FormatAddress';

export default function TableRow(props) {

    console.log(props);
  return (
    <tr><td>{props.userIndex}</td> <td>{props.uservalue.name}</td>  <td>{props.uservalue.email}</td>
    <td>
<FormatAddress address={props.uservalue.address}/>

    </td>
    
    </tr>
  )
}
