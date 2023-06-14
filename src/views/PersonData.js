import { connect } from 'react-redux'
import React, { useEffect } from 'react'
;


const mapStateToProps = (state) => {
    return {
      item: state.person.data
    }
  }

 function PersonData({item,dispatch}) {




   console.log(item);

   useEffect(()=> {

    dispatch({type: 'GET_USERS_REQUESTED'})

   },[])
    
  return (
    <div>PersonData</div>
  )
}

export default connect(mapStateToProps) (PersonData)
