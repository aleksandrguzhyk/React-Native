import { combineReducers } from 'redux'
import PilotsReducer from './PilotsReducer'

export default combineReducers({
  pilots: PilotsReducer
});