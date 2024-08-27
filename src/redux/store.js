import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducer/productReducer';

let store = createStore(reducer, applyMiddleware(thunk));

// console.log(test)
export default store;