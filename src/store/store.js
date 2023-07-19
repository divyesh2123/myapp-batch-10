import { createStore , applyMiddleware} from "redux";
import counterReducer from "../reducer/counterReducer";
import rootReducer from "../reducer";
import thunk from 'redux-thunk';
import rootSaga from '../saga/rootSaga'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  );

  



  export default store;