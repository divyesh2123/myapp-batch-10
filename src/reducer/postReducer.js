const initialState = {

        isloading: false,
        error: {},
        data:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {


    case 'POST_REQ':
        return { ...state, isloading: true};



  case 'SUC':
    return { ...state, isloading: false, data: payload };


  case 'FAIL':
  return { ...state, isloading: false, error: payload };

  default:
    return state
  }
}
