import React from 'react';
import './Apicaller.css';
import hegde from '../assets/mru.jpeg';
import { useState,useEffect,useRef } from 'react';
import { BiSearchAlt } from "react-icons/bi";

function Apicaller() {
  const myref = useRef(null);
  const [image , setimage] = useState('')
  const [name,setname] = useState('');
  const [popularity , setpopularity] = useState('');
  const [overview,setoverview] = useState('')
  const [date , setdate] = useState('')
  const [skel , setskel] = useState(false);
  const [load , setload]= useState(false)
  const fetchdata = async(a) =>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTRhZWVmNmJkMGZiMTI2YTBhYmFmNTMyOWI1OTYzMiIsInN1YiI6IjY1OTU4NGVjMzI2ZWMxMjA3MTA2YzFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7hLm9so1as6fob413pDEgyGy5fHrJAhyKTf8teH50QA'
      }
    }
    const url = `https://api.themoviedb.org/3/search/movie?query=${a}&include_adult=false&language=en-US&page=1, ${options}`;
    

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setimage(result.results[0].poster_path)
  setdate(result.results[0].release_date)
  setoverview(result.results[0].overview)
  setname(result.results[0].title)
  setpopularity(result.results[0].popularity)
  setTimeout(()=>{setskel(true)},3000)
	console.log(result);
} catch (error) {
	console.error(error);
}
  }
  
  return (
    <div className="api">
      <div className='headin'>
          <input 
            list='browsers'
            className='input'
            ref={myref}
            placeholder='Search on Mov4u'
          />
          <datalist id="browsers">
            <option value="Sita Ramam" /> 
            <option value="Interstellar" />
            <option value="Leo" />
            <option value="Uriyadi" />
            <option value="Ok Kanmani" />
          </datalist>
          <div className="search" onClick={()=>{fetchdata(myref.current.value);
            setload(true)
          }} >
          <BiSearchAlt className='searchic'/>
          </div>
          </div>
          {load ? (skel ? <div className="appcont">
        <div className="apiim">
          <img src={`https://image.tmdb.org/t/p/w500${image}`}  alt="" />
        </div>
        <div className="apiname">
          <h1>Movie Name : </h1>
          <div className="resname">
            <p className='apppara'>{name}</p>
          </div>
        </div>
        <div className="apicast">
          <h1>Overview :</h1>
          <div className="resdes">
          <p className='apppara'>{overview}</p>
          </div>
        </div>
        <div className="apides">
          <h1>Release Date :</h1>
          <div className="resdate">
          <p className='apppara'>{date}</p>
          </div>
        </div>
        <div className="rating">
          <h1>Popularity :</h1>
          <div className="resrat">
          <p className='apppara'>{popularity}</p>
          </div>
        </div>
      </div>:<div className='appcont'>
      <div className="apiim">
          <div className="apiimgage"></div>
        </div>
        <div className="apiskel2"></div>
        <div className="apiskel1"></div>
        <div className="apiskel"></div>
        <div className="apiskel"></div>
        </div>):<div className='appcontbf'>
          <h1 className='bf'>Hey!Discover About some Movie 🫣</h1>    
       </div>}
    </div>
  )
}

export default Apicaller;