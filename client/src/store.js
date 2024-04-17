import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {adminReducer, authReducer} from './Reducers/adminReducers';


const reducer = combineReducers({
  auth: authReducer,
  admin:adminReducer,
})

let initialState = {
 
}
const middleware =[thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;