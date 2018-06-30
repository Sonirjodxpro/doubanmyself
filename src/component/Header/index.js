import React, { Component } from 'react';
import './Header.scss'
import {NavLink,Link} from 'react-router-dom'


class Header extends Component{
  render(){
    return (
      <div className='head'>
        <div className='logo'>
          豆瓣
        </div>
        <ul>
          <li><Link to='/movie'>电影</Link></li>
          <li><Link to='/book'>图书</Link></li>
          <li><Link to='/status'>广播</Link></li>
          <li><Link to='/group'>小组</Link></li>
        </ul>
      </div>
    )
  }
}
export default Header