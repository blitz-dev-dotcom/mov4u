import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import { useAuth } from "./contexts/AuthContext";




const firebaseConfig = {
    apiKey: "AIzaSyBky83X6HOg3E78Sid14Om7MpbC9PkMFcQ",
    authDomain: "mov4u-676dc.firebaseapp.com",
    projectId: "mov4u-676dc",
    storageBucket: "mov4u-676dc.appspot.com",
    messagingSenderId: "493961156413",
    appId: "1:493961156413:web:3ca153d33b69fa7af59754"
  };
const firebaseapp = initializeApp(firebaseConfig);
export  const auth = getAuth(firebaseapp);

// export const loader = async(email,password)=>{
    
//     createUserWithEmailAndPassword(auth,email,password)
//     .then(signer=>{
//         console.log(signer);
        
//     })
//     .catch(function(err){console.log(err.message)})
//     onAuthStateChanged(auth,signerU=>{
//         console.log(signerU)
//     })
// }
// export const loginFunc = async(email,password)=>{
//     signInWithEmailAndPassword(auth,email,password)
//     .then(credential=>{
//         console.log(credential.user)
//     })
//     onAuthStateChanged(auth,user=>{
//         console.log(user)
//     })
// }
export default firebaseConfig;