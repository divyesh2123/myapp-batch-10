import { combineReducers } from 'redux';
import counterReducer from './counterReducer'
import productReducer from './productReducer'
import userReducer from './userReducer';


const rootReducer = combineReducers(
    {
    conuter: counterReducer,
    products: productReducer,
    user: userReducer
 
    }
)

export default rootReducer;