import {combineReducers} from 'redux'
import movieReducer from './movie/reducer'
let reducer = combineReducers({
  movie:movieReducer
})
export default reducer;