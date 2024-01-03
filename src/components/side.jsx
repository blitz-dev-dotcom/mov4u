import React from 'react'
import hegde from '../assets/hegde.jpg';
import forbes from '../assets/forbes.jpg';
import art from '../assets/art.jpg';
import naani from '../assets/naani.jpg';
import kiara from '../assets/kiara.jpg';
function Side() {
  return (
    <div className="side2pad">
        <img  className='img1' src={forbes} alt=''/>
        <img className='img1' src={hegde} alt=''/>
        <img className='img1'  src={naani} alt=''/>
        <img className='img1'  src={art} alt=''/>
        <img className='img1'  src={kiara} alt=''/>
    </div>
  )
}

export default Side ;