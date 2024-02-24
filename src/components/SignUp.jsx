import React , { useState} from 'react'
import './signup.css';
import { Link } from 'react-router-dom';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { MdOutlineVerified } from "react-icons/md";


function SignUp() {
    
    const [name,setname] = useState('');
    const [password,setpassword] = useState('');
    const [pass2,setpass2] = useState('');
    const [passcheck,setpasscheck] = useState(false);
    const navigate = useNavigate();
    const [error,seterror] = useState(false);
    const [Errormsg,setErrormsg] = useState('');
    const [Success,setSuccess] = useState(false);
    const [loader , setloader] = useState(false)
    const[passmsg,setpassmsg] = useState('')
    const {navigator} = useAuth();
    function handleSubmit(e){
        e.preventDefault();
        
        if(password===pass2 && password.length >6 && name.includes('@gmail.com')){
            setloader(true);
            createUserWithEmailAndPassword(auth,name,password)
            .then(credential=>{
                console.log(credential);
                setSuccess(true);
                setTimeout(()=>{navigate('/login')},4000)
            })
            .catch(err=>{
                seterror(true);
                setErrormsg(err.message);

            })
        }
        else{
            
            if (password.length < 6) {
                setErrormsg('password must be of maximum 6 characters');
            } else if (password !== pass2) {
                setErrormsg('passwords do not match');
            } else if (!name.includes('@gmail.com')) {
                setErrormsg('Not a valid email');
            }
            
            setpasscheck(true)
        }
        
    }
  return (
    <div className='signup'>
        <div className="signupcard">
            <h1>SignUp</h1>
            {passcheck?<p  className='alert'>{Errormsg}</p>:""}
            {error?<p  className='alert'>E-mail already in use <Link to='/login'>Login</Link></p>:""}
            <form>
                <label htmlFor="name">E-mail</label>
                <input 
                    type='email'
                    placeholder='E-mail'
                    value={name}
                    id='name'
                    onChange={(e)=>{setname(e.target.value)}}
                    required
                    
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    id='pass'
                    onChange={(e)=>{setpassword(e.target.value)}}
                    required
                    
                />
                <label htmlFor="pass1">Re-Type Password</label>
                <input 
                    type='password'
                    placeholder='Password'
                    value={pass2}
                    id='pass1'
                    onChange={(e)=>{setpass2(e.target.value)}}
                    required
                />
                
                {loader ? <button className='flexpre loaderbut'><div className='loading'></div></button> : <button type='submit' onClick={handleSubmit}>SignUp</button>}
                <p className='U56njh'>Already Have an Account? <Link to='/login' className='linker'>Login</Link></p>
            </form>
        </div>
        <popup className={Success? 'flex' : 'none'}>
            <div className="sucex flexpre">
                <div className="sucexpad">
                < MdOutlineVerified  className='icodff'/>
                <h2>SignUp SuccessFull</h2>
                <p>Wait You will redirected to our login page in 4 seconds </p>
                </div>
            </div>
        </popup>
    </div>
  )
}

export default SignUp