import {HOT} from './const'
import axios from 'axios'
let actionCreator = {
  movie_gethot(){
    let url = '/pa'+'/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0'
    return (dispatch)=>{
      axios.get(url).then((data)=>{
        console.log(data.data);
        dispatch({
          type:HOT,
          data:data.data
        })
      })
    }
  }
}
export default actionCreator;