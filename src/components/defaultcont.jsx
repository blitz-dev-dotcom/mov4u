import React from 'react';
import topcele from '../assets/topcele.jpg';
import sam from '../assets/sam.jpg';
import loki from '../assets/loki.jpg';
import dunki from '../assets/dunki.jpg';
import fightclub from '../assets/fightclub.jpg';
import salaar from '../assets/salaar.jpg';
import { FaRegCirclePlay } from "react-icons/fa6";
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
            <section className="shows"></section>
            <section className="week"></section>
            <section className="week1"></section>
    </div>
  )
}

export default defaultcont