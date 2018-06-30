import data from './state'
import {HOT,FREE,NEW} from "./const";
import Pubsub from 'pubsub-js'
let reducer= (state=data, action)=>{
  let newData = Object.assign({},state);
  if (action.type===HOT){
    newData.hotFilm=action.data;
  }
  return newData
}
export default reducer;