import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa";
import {Link} from 'react-router-dom'
function footer() {
  return (
    <div className='footerpad'style={{backgroundColor:`rgb(31, 29, 29)`}}>
        <div className="icofoot">
            <FaInstagram className='footic'/>
            < FaTiktok className='footic'/>
            <FaXTwitter className='footic'/>
            <FaSquareFacebook className='footic'/>
            <RiYoutubeLine className='footic'/>
        </div>
        <div className="footdes">
            <div className="footdp">
                <div className="fdp1">
                    <p>Get the App</p>
                    <p>Site Index</p>
                    <p> Help</p>
                    <p>Explore Pro</p>
                    <Link to='/dev' className='Link'>Developer</Link>
                    <p>Press Room</p>
            
                </div>
                <div className="fdp2">
                    <p>Advertising</p>
                    <p>Jobs</p>
                    <p>Conditions of Use</p>
                    <p>Privacy Policy</p>
                    <p>Your Ad Privacy choices</p>
                </div>
            </div>
        </div>
        <div className="footcom">
            <h4>A <span>Mov4U</span> Company</h4>
        </div>
        <div className="copyright">
            <p><FaCopyright/> 1993-2024 Mov4U.com</p>
        </div>
    </div>
  )
}

export default footer;
