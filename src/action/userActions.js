export const getUserListStarted = () => {
    return {
      type: "GET_USER_LIST_STARTED"
    }
  }
  
  // to get the list of users - success
  export const getUserListSuccess = data => {
    return {
      type: "GET_USER_LIST_SUCCESS",
      payload: {
        data
      }
    }
  }
  
  // to get the list of users - failure
  export const getUserListFailure = error => {
    return {
      type: "GET_USER_LIST_FAILURE",
      payload: {
        error
      }
    }
}