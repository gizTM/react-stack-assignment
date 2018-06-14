import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import createFormReducer from './createFormReducer'

export default combineReducers({
  todo: todoReducer,
  form: createFormReducer
})