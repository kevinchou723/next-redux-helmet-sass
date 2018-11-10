import { combineReducers } from 'redux'
import exampleReducer from './example-reducer' 

const allReducers = {
  example: exampleReducer
}

export default combineReducers(allReducers)
