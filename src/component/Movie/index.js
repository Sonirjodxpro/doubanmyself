import React, { Component } from 'react';
import './Movie.scss'
import FilmModule from '../FilmModule'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import movieActionCreator from '../../redux/movie/actionCreator'
import Pubsub from 'pubsub-js'

class Movie extends Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.state={
      hot:{},
      free:[],
      new:[]
  }

  }
  componentWillMount(){
    this.props.movie_gethot();
  }

  render(){
    return (
      <div className='filmall'>
        <FilmModule/>
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

let Aa = connect(mapStateToProps,mapDispatchToProps)(Movie)
export default Aa;
