import React , {useState} from 'react'
import './signup.css';
import {auth } from '../firebase';
import {signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FcGoogle } from "react-icons/fc";

function Login() {

    const [name,setname] = useState('');
    const [password,setpassword] = useState('');
    const [passcheck,setpasscheck] = useState(false);
    const [Errmsg,setErrmsg] = useState('');
    const [Danmsg,setDanmsg] = useState('');
    const navigate = useNavigate();
    const {Reg} = useAuth();
    const {setReg} = useAuth();
    const {setCurrentUser} = useAuth();
    const {setphotoUrl}= useAuth();
    function googleSignIn(e){
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(credential=>{
            setCurrentUser(credential.user.displayName);
            setphotoUrl(credential.user.photoURL);
            setReg(true)
            
            navigate('/');
        })
        .catch(err=>{setErrmsg(err)})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(password.length > 6 && name.includes('@gmail.com')){
             signInWithEmailAndPassword(auth,name,password)
             .then(Credential=>{
                const local = Credential.user.uid;
                setCurrentUser(local.substring(6,0))
                setpasscheck(true);
                setErrmsg('login Successfull!');
                setReg(!Reg);
                setTimeout(()=>navigate('/'),3000)
             })
             .catch(err=>{
                setpasscheck(true);
                setDanmsg(err.message);
                
             })
             
        }
        else{
            if (password.length < 6) {
                setErrmsg('password must be of maximum 6 characters');
            }
             else if (!name.includes('@gmail.com')) {
                setErrmsg('Not a valid email');
            }
            setpasscheck(true)
        }
        
    }
  return (
    <div className='signup'>
        <div className="signupcard">
            <h1>Login</h1>
            <button onClick={googleSignIn} className='google'> <FcGoogle className='goo' />Sign in with Google</button>
            {passcheck?<p  className='success'>{Errmsg}</p>:""}
            
            <form>
                <label htmlFor="name">E-mail</label>
                <input 
                    type='email'
                    placeholder='E-mail'
                    value={name}
                    id='name'
                    onChange={(e)=>{setname(e.target.value)}}
                    
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    id='pass'
                    onChange={(e)=>{setpassword(e.target.value)}}
                    
                />
                
                <button type='submit' onClick={handleSubmit}>SignIn</button>
                
                
                </form>
                
            </div>
    </div>
  )
}

export default Login