import './App.css';
import React from 'react';
import { useContext,useState } from 'react';
import Defaultcont from './components/defaultcont';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaBookmarkSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { MdMovieCreation } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import { IoPeople } from "react-icons/io5";
import { SiThemoviedatabase } from "react-icons/si";
import UserContext from './context/UserContext';
import Side from './components/side';
import Footer from './components/footer';

function App() {
  const [toggle , settoggle] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <logo className="log">
            <h3 className="loghead">Mov4u</h3>
          </logo>
          <div className="expand">
              {toggle?<SiThemoviedatabase  className='menuic'onClick={()=>{if(toggle===false){settoggle(true)}else{settoggle(false)}}} />:<RiMenu2Fill className='menuic'onClick={()=>{if(toggle===false){settoggle(true)}else{settoggle(false)}}}/>}
              <p className='menupara'>menu</p>
          </div>
          <>
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

          </>
          
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

      <div className="container">
        {toggle?<div className="side" style={{display:'none'}}>
        <div className="sidebar">
          <div className="sidepad">
            <div className="colum1">
              <h3 className='colh'>Home</h3>
            <ul className="sideli">
              <li className="trending">
                <IoIosTrendingUp className='sideic'/>
                <h3 className='sidehead'>Trending</h3>
              </li>
              <li className="movie">
                <MdMovieCreation className='sideic'/>
                <h3 className='sidehead'>Movies</h3>
              </li>
              <li className="tv">
                <PiTelevisionFill className='sideic'/>
                <h3 className='sidehead'>TV</h3>
              </li>
              <li className="news">
                <FaRegNewspaper className='sideic'/>
                <h3 className='sidehead'>News</h3>
              </li>
              <li className="awards">
                < LiaAwardSolid className='sideic'/>
                <h3 className='sidehead'>Awards</h3>
              </li>
              <li className="people">
                <IoPeople className='sideic'/>
                <h3 className='sidehead'>Peoples</h3>
              </li>
            </ul>
            </div>
            <div className="colum2">
              <h3 className='colh'>Film Genre</h3>
            <div className="ulclas">
            <ul className='side padder'>
              <li><h3 className='sidehead'>Action</h3></li>
              <li><h3 className='sidehead'>Horror</h3></li>
              <li><h3 className='sidehead'>Comedy</h3></li>
              <li><h3 className='sidehead'>Animation</h3></li>
              <li><h3 className='sidehead'>Thriller</h3></li>
              <li><h3 className='sidehead'>Romance</h3></li>
              <li><h3 className='sidehead'>Scifi</h3></li>
              <li><h3 className='sidehead'>Biographical</h3></li>
              <li><h3 className='sidehead'>Crime</h3></li>
              <li><h3 className='sidehead'>Fantasy</h3></li>
              <li><h3 className='sidehead'>Drama</h3></li>
            </ul>
            </div>
            </div>
          </div>
        </div>
        <div className="sidepad2">
            <Side />
        </div>
        </div>:<div className="side">
        <div className="sidebar">
          <div className="sidepad">
            <div className="colum1">
              <h3 className='colh'>Home</h3>
            <ul className="sideli">
              <li className="trending">
                <IoIosTrendingUp className='sideic'/>
                <h3 className='sidehead'>Trending</h3>
              </li>
              <li className="movie">
                <MdMovieCreation className='sideic'/>
                <h3 className='sidehead'>Movies</h3>
              </li>
              <li className="tv">
                <PiTelevisionFill className='sideic'/>
                <h3 className='sidehead'>TV</h3>
              </li>
              <li className="news">
                <FaRegNewspaper className='sideic'/>
                <h3 className='sidehead'>News</h3>
              </li>
              <li className="awards">
                < LiaAwardSolid className='sideic'/>
                <h3 className='sidehead'>Awards</h3>
              </li>
              <li className="people">
                <IoPeople className='sideic'/>
                <h3 className='sidehead'>Peoples</h3>
              </li>
            </ul>
            </div>
            <div className="colum2">
              <h3 className='colh'>Film Genre</h3>
            <div className="ulclas">
            <ul className='side padder'>
              <li><h3 className='sidehead'>Action</h3></li>
              <li><h3 className='sidehead'>Horror</h3></li>
              <li><h3 className='sidehead'>Comedy</h3></li>
              <li><h3 className='sidehead'>Animation</h3></li>
              <li><h3 className='sidehead'>Thriller</h3></li>
              <li><h3 className='sidehead'>Romance</h3></li>
              <li><h3 className='sidehead'>Scifi</h3></li>
              <li><h3 className='sidehead'>Biographical</h3></li>
              <li><h3 className='sidehead'>Crime</h3></li>
              <li><h3 className='sidehead'>Fantasy</h3></li>
              <li><h3 className='sidehead'>Drama</h3></li>
            </ul>
            </div>
            </div>
          </div>
        </div>
        <div className="sidepad2">
            <Side />
        </div>
        </div>}
        {toggle?<div className="contents" style={{width:`100%`}}>
          <Defaultcont/>
        </div>:<div className="contents">
          <Defaultcont/>
        </div>}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
