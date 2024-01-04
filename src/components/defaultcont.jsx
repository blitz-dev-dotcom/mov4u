import React from 'react';
import topcele from '../assets/topcele.jpg';
import sam from '../assets/sam.jpg';
import loki from '../assets/loki.jpg';
import salaarpra from '../assets/salaarprabas.jpg';
import dunki from '../assets/dunki.jpg';
import godzilla from '../assets/godzilla.jpg';
import { FaRegCirclePlay } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import poojafoot from '../assets/poojafoot.jpg';
import amitab from '../assets/amitab.jpg';
import mru from '../assets/mru.jpeg';
import prabu from '../assets/prabaspi.jpeg';
import saman from '../assets/Samantha.jpeg'
function defaultcont() {
   
  return (
    <div className="contpad">
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
  )
}

export default defaultcont