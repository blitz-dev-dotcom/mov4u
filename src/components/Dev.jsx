import React from 'react';
import Ma from '../assets/maadh.jpg';
import aj from '../assets/aj.jpg'
import './dev.css';
import { useEffect , useState } from 'react';
function Dev() {
    const [skeleton,setskeleton] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
           setskeleton(true);
       },5000)
    },[])
  return (
    <div className='dev'>
        {skeleton ? <div className="devcont">
            <div className="devma">
                <img src={Ma} alt="" />
                <div className='devdes' style={{color:'white'}}>
                    <h1>Madhesh.R.S</h1>
                    <h2>Passionate UI/UX Designer</h2>
                    <h3><span style={{color:'green'}}>E-mail</span> : madeshrs2003@gmail.com</h3>
                    <a href='https://porttfolioajay.netlify.app'>Portfolio ↗↗↗</a>
                </div>
            </div>
            <div className="devaj">
                <img src={aj} alt="" />
            <div className='devdes' style={{color:'white'}}>
            <h1>Ajay.S</h1>
                    <h2>React FrontEnd Web Developer</h2>
                    <h3><span style={{color:'green'}}>E-mail</span> : mrfrontend0401@gmail.com</h3>
                    <a href='https://porttfolioajay.netlify.app'>Portfolio ↗↗↗</a>
            </div>
            </div>
        </div>: <div className="devcont1">
            <div className="devma1">
                <div className="img1d"></div>
                <div className='devdes1'>
                    <h1></h1>
                    <h2></h2>
                    <h3></h3>
                    <h4></h4>
                </div>
            </div>
            <div className="devma1">
                <div className="img1d"></div>
                <div className='devdes1'>
                    <h1></h1>
                    <h2></h2>
                    <h3></h3>
                    <h4></h4>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Dev