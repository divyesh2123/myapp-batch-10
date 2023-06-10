import { createStore , applyMiddleware} from "redux";
import counterReducer from "../reducer/counterReducer";
import rootReducer from "../reducer";
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  );

  
  export default store;