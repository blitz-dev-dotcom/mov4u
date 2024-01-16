import React from 'react';
import { useState , useEffect} from 'react';


function Horror() {
    const [res , setres] = useState('');
    const [skel,setskel] = useState(false);
    const handleClick = ()=>{
        
        window.removeEventListener('load',handleClick)
    }
    window.addEventListener('load',handleClick)
    useEffect(() => {
        const data = async () => {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTRhZWVmNmJkMGZiMTI2YTBhYmFmNTMyOWI1OTYzMiIsInN1YiI6IjY1OTU4NGVjMzI2ZWMxMjA3MTA2YzFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7hLm9so1as6fob413pDEgyGy5fHrJAhyKTf8teH50QA',
            },
          };
          const response = await fetch('https://api.themoviedb.org/3/list/27', options);
          const result = await response.json();
          console.log(result)
    
          // Set the state after fetching data
          setres(result.items);
          setTimeout(()=>setskel(true),4000)
        };
    
        // Call the function when the component mounts
        data();
        console.log(res)
      }, []);

  return (
    <div className='trendingt1'>
        <div className='trendpad'>
            {skel? 
              (Array.isArray(res) ? res.map((item)=>{
                return(
                    (
                        <div className='cardtr' key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className="trenimg" />
                        <div className="carddettr">
                            <h1>{item.original_title}</h1>
                            <h2>{item.popularity}</h2>
                            <p>{item.overview}</p>
        
                        </div>
                    </div>
                    )
                )
            }): null)
            : <div className="devcont1t">
            <div className="devma1t">
                <div className="img1dt"></div>
                <div className='devdes1t'>
                    <h1></h1>
                    <h2></h2>
                    <h3></h3>
                    <h4></h4>
                </div>
            </div>
            <div className="devma1t">
                <div className="img1dt"></div>
                <div className='devdes1t'>
                    <h1></h1>
                    <h2></h2>
                    <h3></h3>
                    <h4></h4>
                </div>
            </div>
        </div>}
        </div>
    </div>
  )
}

export default Horror