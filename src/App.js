import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect,withRouter} from 'react-router-dom'
import Header from './component/Header'
import Movie from './component/Movie'

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className='content'>
            <Switch>
              <Route path='/movie' exact component={Movie}/>
            </Switch>
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
