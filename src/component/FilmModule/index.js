import './FilmModule.scss'
import React,{Component} from 'react'
import Rank from '../Rank'
import Pubsub from 'pubsub-js'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import movieActionCreator from "../../redux/movie/actionCreator";
class FilmModule extends Component{
  constructor(props){
    super(props);
    this.state={
      freelist:[],
      newlist:[],
      name:'',
      hot:''
    }

  }
  componentDidMount(){

  }
  componentDidUpdate(){
    console.log(1)
    if (!this.state.hot.count){
      this.setState({
        hot:this.props.movie.hotFilm
      })
    }
    console.log(this.state.hot)

  }
  render(){
    return (
      <div className='filmbox'>
        <div className='filmmodule'>
          <header>
            <h1>{this.state.hot?this.state.hot.subject_collection.name:''}</h1>
            <a>更多</a>
          </header>
          <div className='filmbox'>
            <ul>
              {
              this.state.hot? this.state.hot.subject_collection_items.map((value,index)=>{                let a=5;
                    let lightarr =[];
                    let darkarr = [];
                    if (value.rating){
                      let va = value.rating.value;
                      if ((va%2)>1){
                        let light = parseInt(va/2)+1;
                        for (let i=1;i<=light;i++){
                          lightarr.push(1);
                        }
                        for(let j=1;j<=(a-light);j++){
                          darkarr.push(1);
                        }
                      } else {
                        let light = parseInt(va/2);
                        for (let i=1;i<=light;i++){
                          lightarr.push(1);
                        }
                        for(let j=1;j<=(a-light);j++){
                          darkarr.push(1);
                        }
                      }
                    }
                    return (
                    <li key={index}>
                      <div className='imgbox' style={{backgroundImage:'url('+value.cover.url+')'}}></div>
                      <span>{value.title}</span>
                      <div className='item-rating'>
                        <div className='rank'>
                          <span className='rating-stars'>
                            {
                              lightarr.length?lightarr.map((value, index)=>{
                                return <span key={index} className='rating-star rating-star-full'></span>
                              }):<span>暂无评分</span>
                            }

                            {
                              darkarr.map((value, index)=>{
                                return <span key={index} className='rating-star rating-star-gray'></span>
                              })
                            }
                          </span>
                        </div>
                      </div>
                    </li>
                    )
                  }):''
              }
            </ul>
          </div>
        </div>
      </div>

    )
  }
}
let mapStateToProps =(state)=>{
  return state
}

let mapDispatchToProps = (dispatch)=>{
  return bindActionCreators(movieActionCreator,dispatch)
}

let Aa = connect(mapStateToProps,mapDispatchToProps)(FilmModule)
export default Aa;
