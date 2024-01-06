import React from 'react';
import { LiaBookmarkSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { BiSearchAlt } from "react-icons/bi";

function Header() {
  
  
  return (
    <>
        <header className="App-header">
        <nav className="navbar">
          <logo className="log">
            <h3 className="loghead">Mov4u</h3>
          </logo>
          
          <div className='headin'>
          <input 
            list='browsers'
            className='input'
            placeholder='Search on Mov4u'
          />
          <datalist id="browsers">
            <option value="Sita Ramam" /> 
            <option value="Interstellar" />
            <option value="Leo" />
            <option value="Uriyadi" />
            <option value="Ok Kanmani" />
          </datalist>
          <div className="search">
          <BiSearchAlt className='searchic'/>
          </div>
          </div>
          
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
        </nav>
      </header>
    </>
  )
}

export default Header