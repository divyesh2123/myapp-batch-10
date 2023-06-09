import { combineReducers } from 'redux';
import counterReducer from './counterReducer'
import productReducer from './productReducer'


const rootReducer = combineReducers(
    {
    conuter: counterReducer,
    products: productReducer
 
    }
)

export default rootReducer;