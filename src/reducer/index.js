import { combineReducers } from 'redux';
import counterReducer from './counterReducer'
import productReducer from './productReducer'
import userReducer from './userReducer';
import preronReducer from './preronReducer';
import postReducer from './postReducer';


const rootReducer = combineReducers(
    {
    conuter: counterReducer,
    products: productReducer,
    user: userReducer,
    person: preronReducer,
    post: postReducer
 
    }
)

export default rootReducer;