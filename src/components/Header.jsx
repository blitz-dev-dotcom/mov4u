import React , {useState} from 'react';

import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { MdMovieCreation } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const navigate = useNavigate();
  const [mobile,setmobile] = useState(false)
  const [isopen,setisopen] = useState(false)
  return (
    <>
        <header className="App-header">
          <h3>Mov4U</h3>
          <ul className={mobile ? 'navres' : "navul"}>
            <NavLink to='/tr' className='navli' ><li>Search</li></NavLink>
            <NavLink to='' className='navli'><li>Home</li></NavLink>
            <li className='navli'>WatchList</li>
            <li className='navli'>User1</li>
          </ul>
          <div className='navmen'>
            {isopen ? <RxCross1  className='ic' onClick={()=>{setisopen(!isopen);setmobile(false)}}/> : <RiMenu2Fill className='ic'onClick={()=>{setisopen(!isopen);setmobile(true)}}/> }
          </div>
      </header>
    </>
  )
}

export default Header