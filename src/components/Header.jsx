import React , {useState} from 'react';
import { LiaBookmarkSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { MdMovieCreation } from "react-icons/md";

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
            {isopen ? <RiMenu2Fill className='ic'onClick={()=>{setisopen(!isopen);setmobile(true)}}/> : <MdMovieCreation className='ic' onClick={()=>{setisopen(!isopen);setmobile(false)}}/> }
          </div>
      </header>
    </>
  )
}

export default Header