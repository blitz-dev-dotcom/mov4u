import React from 'react';
import { LiaBookmarkSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  
  return (
    <>
        <header className="App-header">
        <nav className="navbar">
          <logo className="log">
            <h3 className="loghead">Mov4u</h3>
          </logo>
          
          <NavLink to='/tr' id='searchby' >Search By Movies</NavLink>
          <NavLink to='/' id='searchby' >Home</NavLink>
          
          <div className='nav2'>
          <div className="watch">
              <LiaBookmarkSolid className='bookmark'/>
              <h3 className="watchlist">Watchlist</h3>
          </div>
          <div className="user">
              <CiUser className='useric'/>
              <h3 className="user1">User1</h3>
          </div>
          <div className="lang">
            <select className='select'>
              <option className='option'>EN</option>
              <option className='option'>ES</option>
              <option className='option'>TA</option>
              <option className='option'>SPA</option>
              <option className='option'>FRE</option>
            </select>
          </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header