import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import topcele from '../assets/topcele.jpg';
import sam from '../assets/sam.jpg';
import loki from '../assets/loki.jpg';
import salaarpra from '../assets/salaarprabas.jpg';
import dunki from '../assets/dunki.jpg';
import godzilla from '../assets/godzilla.jpg';
import { FaRegCirclePlay } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import amitab from '../assets/amitab.jpg';
import mru from '../assets/mru.jpeg';
import prabu from '../assets/prabaspi.jpeg';
import saman from '../assets/Samantha.jpeg';
import hegde from '../assets/hegde.jpg';
import forbes from '../assets/forbes.jpg';
import art from '../assets/art.jpg';
import naani from '../assets/naani.jpg';
import kiara from '../assets/kiara.jpg';
import { IoIosTrendingUp } from "react-icons/io";
import { MdMovieCreation } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import { IoPeople } from "react-icons/io5";
import { SiThemoviedatabase } from "react-icons/si";
import { RiMenu2Fill } from "react-icons/ri";


function Home() {
   const [toggle,settoggle]= useState(false)
  return (
    <>
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
            <div className="side2pad">
                <img  className='img1s' src={forbes} alt=''/>
                <img className='img1s' src={hegde} alt=''/>
                <img className='img1s'  src={naani} alt=''/>
                <img className='img1s'  src={art} alt=''/>
                <img className='img1s'  src={kiara} alt=''/>
                <img className='img1s'  src={forbes} alt=''/>
                <img className='img1s'  src={naani} alt=''/>
        </div>
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
        
            <div className="side2pad">
                <img  className='img1' src={forbes} alt=''/>
                <img className='img1' src={hegde} alt=''/>
                <img className='img1'  src={naani} alt=''/>
                <img className='img1'  src={art} alt=''/>
                <img className='img1'  src={kiara} alt=''/>
                <img className='img1'  src={forbes} alt=''/>
                <img className='img1'  src={naani} alt=''/>
       
        </div>
        </div>
        </div>}
        {toggle?<div className="contents" style={{width:`90%`}}>
        <div className="contpad">
        <div className="expand">
          {toggle?<SiThemoviedatabase  className='menuic' onClick={() => { if (toggle === false) { settoggle(true) } else { settoggle(false) } }} />:<RiMenu2Fill className='menuic'onClick={() => { if (toggle === false) {settoggle(true) } else {settoggle(false) } }}/>}
              
          </div>
            <section className="today">
                <h1 className='sechead'>Featured Today</h1>
                <div className="imgslider">
                    <div className="card">
                        <img className='deimg' src={topcele} alt="" />
                        <h3>Top 10 Actors in India</h3>
                        <p>see List</p>
                    </div>
                    <div className="card">
                        <img className='deimg' src={sam} alt="" />
                        <h3>Top 10 Actress in India</h3>
                        <p>see List</p>
                    </div>
                    <div className="card">
                        <img className='deimg' src={loki} alt="" />
                        <h3>Top 10 Series Now</h3>
                        <p>see List</p>
                    </div>
                </div>
            </section>
            <section className="trailer">
                <h1 className="traihead">Newest Trailers </h1>
                <div className="traidiv">
                    <div className="god">
                        <iframe src="https://www.youtube.com/embed/lV1OOlGwExM?si=Kg_BFiZhuoN1UOd3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="row1">
                        <div className="rwpos"><div className="pospad1"></div></div>
                        <div className="rwplay"><a href='https://youtu.be/mcVnMWmsSF0?si=CR-l9klysCyTJIWw'><FaRegCirclePlay className='traiic'/></a></div>
                        <div className="rwdura"><h3 className='traihe'>2:10</h3></div>
                        <div className="rwname"><h3 className='traihe'>Fight Club</h3></div>
                    </div>
                    <div className="row2">
                    <div className="rwpos"><div className="pospad2"></div></div>
                        <div className="rwplay"><a href='https://youtu.be/uOlDK7g7b-E?si=NOxHOCFIPK3wKIYc'><FaRegCirclePlay className='traiic'/></a></div>
                        <div className="rwdura"><h3 className='traihe'>2:40</h3></div>
                        <div className="rwname"><h3 className='traihe'>Dunki</h3></div>
                    </div>
                    <div className="row3">
                    <div className="rwpos"><div className="pospad3"></div></div>
                        <div className="rwplay"><a href='https://youtu.be/HihakYi5M2I?si=VtXVjaqvzvnk0gEB'><FaRegCirclePlay className='traiic'/></a></div>
                        <div className="rwdura"><h3 className='traihe'>3:20</h3></div>
                        <div className="rwname"><h3 className='traihe'>Salaar</h3></div>
                    </div>
                </div>
            </section>
            <section className="shows">
                <div className="explore">
                    <h3 className='exphead '>Explore Movies and TV shows</h3>
                </div>
                <div className="title">
                    <div className="titlepad">
                        <h3 className='titlehead'>In Theatres <GrNext className='nextic'/></h3>
                        <p className='titlepa'>Show Times Near You</p>
                    </div>
                </div>
                <div className="mover">
                        <div className="movcad1">
                            <div className="movpos1"></div>
                            <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/ED-4d0S4Mj0?si=Ne-Nt07Hb-2nS6NT'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos2"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/uOlDK7g7b-E?si=NOxHOCFIPK3wKIYc'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos3"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/NAmQ2zfH3jY?si=MPpjp-9CH--3tvDp'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos4"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star' /></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/ugJ7TETZnn0?si=DEI2k0-n4cbmlF2m'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos5"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/QoExzHQMUdA?si=Qo8ZemBRM51jwggl'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                </div>
            </section>
            <section className="week">
                <div className="top">
                    <div className="tophead">
                        <h3 className='titlehead' style={{paddingLeft:`10px`}}>Top 10 On Mov4U This Week <GrNext className='nextic'/></h3>
                        <p className='titlepa'>On Tv and Movies</p>
                    </div>
                </div>
                <div className="movertop">
                        <div className="movcad1">
                            <div className="movpos1" ></div>
                            <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/ED-4d0S4Mj0?si=Ne-Nt07Hb-2nS6NT'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos2"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/uOlDK7g7b-E?si=NOxHOCFIPK3wKIYc'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos3"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/NAmQ2zfH3jY?si=MPpjp-9CH--3tvDp'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos4"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star' /></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/ugJ7TETZnn0?si=DEI2k0-n4cbmlF2m'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos5"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/QoExzHQMUdA?si=Qo8ZemBRM51jwggl'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        </div>
            </section>
            <section className="week1" style={{paddingLeft:`10px`}}>
                    <div className="tophead">
                        <h3 className='titlehead' >UpComing Movies <GrNext className='nextic'/></h3>
                        <p className='titlepa'>Theatres And Tv</p>
                    </div>
                    <div className="w1coll">
                    <div className="imgslider">
                    <div className="card">
                        <img className='deimg' src={salaarpra} alt="" />
                        <h3>Salaar</h3>
                        <p>Released On Dec 22</p>
                    </div>
                    <div className="card">
                        <img className='deimg' src={dunki} alt="" />
                        <h3>Dunki</h3>
                        <p> Released On Dec 22</p>
                    </div>
                    <div className="card">
                        <img className='deimg' src={godzilla} alt="" />
                        <h3>GodZilla</h3>
                        <p>On April 2024</p>
                    </div>
                </div>
                    </div>
            </section>
            <section className="shows">
                
                <div className="title" style={{paddingLeft:`10px`}}>
                    <div className="titlepad">
                        <h3 className='titlehead'>Born This Month <GrNext className='nextic'/></h3>
                        <p className='titlepa'>January</p>
                    </div>
                </div>
                <div className="cd">
                    <div className="cdpad">
                        <div className="cd1">
                            <img className="cdpos" src={mru} alt="" />
                            <h2  style={{textAlign:'center'}}>Mrunal Takur</h2>
                        </div>
                        <div className="cd1">
                            <img className="cdpos" src={saman} alt="" />
                            <h2 style={{textAlign:'center'}}>Samantha</h2>
                        </div>
                        <div className="cd1">
                            <img className="cdpos" src={prabu} alt="" />
                            <h2 style={{textAlign:'center'}}>Prabhas</h2>
                        </div>
                        <div className="cd1">
                            <img className="cdpos" src={amitab} alt="" />
                            <h2 style={{textAlign:'center'}}>Amitab Mama</h2>
                        </div>
                    </div>
                </div>
            </section>
    </div>
        </div>:<div className="contents">
        <div className="contpad">
        <div className="expand">
          {toggle?<SiThemoviedatabase  className='menuic' onClick={() => { if (toggle === false) { settoggle(true) } else { settoggle(false) } }} />:<RiMenu2Fill className='menuic'onClick={() => { if (toggle === false) {settoggle(true) } else {settoggle(false) } }}/>}
              
          </div>
            <section className="today">
                <h1 className='sechead'>Featured Today</h1>
                <div className="imgslider">
                    <div className="card">
                        <img className='deimg' src={topcele} alt="" />
                        <h3>Top 10 Actors in India</h3>
                        <p>see List</p>
                    </div>
                    <div className="card">
                        <img className='deimg' src={sam} alt="" />
                        <h3>Top 10 Actress in India</h3>
                        <p>see List</p>
                    </div>
                    <div className="card">
                        <img className='deimg' src={loki} alt="" />
                        <h3>Top 10 Series Now</h3>
                        <p>see List</p>
                    </div>
                </div>
            </section>
            <section className="trailer">
                <h1 className="traihead">Newest Trailers</h1>
                <div className="traidiv">
                    <div className="god">
                        <iframe src="https://www.youtube.com/embed/lV1OOlGwExM?si=Kg_BFiZhuoN1UOd3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="row1">
                        <div className="rwpos"><div className="pospad1"></div></div>
                        <div className="rwplay"><a href='https://youtu.be/mcVnMWmsSF0?si=CR-l9klysCyTJIWw'><FaRegCirclePlay className='traiic'/></a></div>
                        <div className="rwdura"><h3 className='traihe'>2:10</h3></div>
                        <div className="rwname"><h3 className='traihe'>Fight Club</h3></div>
                    </div>
                    <div className="row2">
                    <div className="rwpos"><div className="pospad2"></div></div>
                        <div className="rwplay"><a href='https://youtu.be/uOlDK7g7b-E?si=NOxHOCFIPK3wKIYc'><FaRegCirclePlay className='traiic'/></a></div>
                        <div className="rwdura"><h3 className='traihe'>2:40</h3></div>
                        <div className="rwname"><h3 className='traihe'>Dunki</h3></div>
                    </div>
                    <div className="row3">
                    <div className="rwpos"><div className="pospad3"></div></div>
                        <div className="rwplay"><a href='https://youtu.be/HihakYi5M2I?si=VtXVjaqvzvnk0gEB'><FaRegCirclePlay className='traiic'/></a></div>
                        <div className="rwdura"><h3 className='traihe'>3:20</h3></div>
                        <div className="rwname"><h3 className='traihe'>Salaar</h3></div>
                    </div>
                </div>
            </section>
            <section className="shows">
                <div className="explore">
                    <h3 className='exphead '>Explore Movies and TV shows</h3>
                </div>
                <div className="title">
                    <div className="titlepad">
                        <h3 className='titlehead'>In Theatres <GrNext className='nextic'/></h3>
                        <p className='titlepa'>Show Times Near You</p>
                    </div>
                </div>
                <div className="mover">
                        <div className="movcad1">
                            <div className="movpos1"></div>
                            <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/ED-4d0S4Mj0?si=Ne-Nt07Hb-2nS6NT'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos2"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/uOlDK7g7b-E?si=NOxHOCFIPK3wKIYc'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos3"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/NAmQ2zfH3jY?si=MPpjp-9CH--3tvDp'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos4"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star' /></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/ugJ7TETZnn0?si=DEI2k0-n4cbmlF2m'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos5"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/QoExzHQMUdA?si=Qo8ZemBRM51jwggl'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                </div>
            </section>
            <section className="week">
                <div className="top">
                    <div className="tophead">
                        <h3 className='titlehead' style={{paddingLeft:`10px`}}>Top 10 On Mov4U This Week <GrNext className='nextic'/></h3>
                        <p className='titlepa'>On Tv and Movies</p>
                    </div>
                </div>
                <div className="movertop">
                        <div className="movcad1">
                            <div className="movpos1" ></div>
                            <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/ED-4d0S4Mj0?si=Ne-Nt07Hb-2nS6NT'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos2"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/uOlDK7g7b-E?si=NOxHOCFIPK3wKIYc'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos3"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/NAmQ2zfH3jY?si=MPpjp-9CH--3tvDp'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos4"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star' /></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/ugJ7TETZnn0?si=DEI2k0-n4cbmlF2m'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        <div className="movcad1">
                        <div className="movpos5"></div>
                        <h3 style={{textAlign:'center'}}>8.2 <FaStar className='star'/></h3>
                            <h3 style={{textAlign:'center'}}>see more</h3>
                            <a style={{textDecoration:'none',color:'white'}}href='https://youtu.be/QoExzHQMUdA?si=Qo8ZemBRM51jwggl'><h3 style={{textAlign:'center'}}>Trailer </h3></a>
                        </div>
                        </div>
            </section>
            <section className="week1" style={{paddingLeft:`10px`}}>
                    <div className="tophead">
                        <h3 className='titlehead' >UpComing Movies <GrNext className='nextic'/></h3>
                        <p className='titlepa'>Theatres And Tv</p>
                    </div>
                    <div className="w1coll">
                    <div className="imgslider">
                    <div className="card">
                        <img className='deimg' src={salaarpra} alt="" />
                        <h3>Salaar</h3>
                        <p>Released On Dec 22</p>
                    </div>
                    <div className="card">
                        <img className='deimg' src={dunki} alt="" />
                        <h3>Dunki</h3>
                        <p> Released On Dec 22</p>
                    </div>
                    <div className="card">
                        <img className='deimg' src={godzilla} alt="" />
                        <h3>GodZilla</h3>
                        <p>On April 2024</p>
                    </div>
                </div>
                    </div>
            </section>
            <section className="showsbor">
                
                <div className="titlebor" style={{paddingLeft:`10px`}}>
                    <div className="titlepadbor">
                        <h3 className='titleheadbor'>Born This Month <GrNext className='nextic'/></h3>
                        <p className='titlepabor'>January</p>
                    </div>
                </div>
                <div className="cd">
                    <div className="cdpad">
                        <div className="cd1">
                            <img className="cdpos" src={mru} alt="" />
                            <h2  style={{textAlign:'center'}}>Mrunal Takur</h2>
                        </div>
                        <div className="cd1">
                            <img className="cdpos" src={saman} alt="" />
                            <h2 style={{textAlign:'center'}}>Samantha</h2>
                        </div>
                        <div className="cd1">
                            <img className="cdpos" src={prabu} alt="" />
                            <h2 style={{textAlign:'center'}}>Prabhas</h2>
                        </div>
                        <div className="cd1">
                            <img className="cdpos" src={amitab} alt="" />
                            <h2 style={{textAlign:'center'}}>Amitab Mama</h2>
                        </div>
                    </div>
                </div>
            </section>
            
    </div>
        </div>}
      </div>
    </>
    
  )
}

export default Home;