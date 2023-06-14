import React, { useEffect } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      item: state.person.data
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      getData: () => dispatch({type: 'GET_USERS_REQUESTED'})
      
    }
  }

 function PersonData2({item,getData}) {

    useEffect(()=> {

        getData();
    
       },[])
  return (
    <div>PersonData2</div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (PersonData2);