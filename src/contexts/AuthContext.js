import React , {useContext,useEffect,useState} from 'react';
import auth from '../firebase';


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);                                         
}

export function AuthProvider({children}) {
    const [CurrentUser,setCurrentUser] = useState('');
    const [navigator,setnavigator] = useState(false);
    const [Reg , setReg] = useState(false);
    const [photoUrl , setphotoUrl] = useState(null);

    // useEffect(()=>{
    //     const Unsubscribe = onAuthStateChanged(auth,initializeUser);
    //     return Unsubscribe;
    // },[])
    // async function initializeUser(user){
    //     if(user){
    //         setCurrentUser({...user})
    //     }
    //     else{
    //         console.log('nope')
    //     }
    // }
    // function login(email,password){
    //     signInWithEmailAndPassword(email,password)
    //     .then((credential)=>{
    //         console.log(credential)
    //     })
    
        
   
    const value = {
        CurrentUser,
        navigator,
        setCurrentUser,
        Reg,
        setReg,
        photoUrl,
        setphotoUrl
      
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

