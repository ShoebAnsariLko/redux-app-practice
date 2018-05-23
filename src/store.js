import {createStore,combineReducers, applyMiddleware} from 'redux'
import math from './reducers/mathReducer'
import user from './reducers/userReducer'

const middleWare=(state)=>(next)=>(action)=>{
    console.log("MiddleWare State:",action)
    next(action)
}
export default createStore(
    combineReducers({math,user}),{},applyMiddleware(middleWare))
