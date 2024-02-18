import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout';
import Home from './components/Home';
import Dev from './components/Dev';
import Trending from './components/Trending';
import Action from './genre/Action';
import Horror from './genre/Horror';
import Comedy from './genre/Comedy';
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom';
import Apicaller from './components/Apicaller';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/tr'  element={<Apicaller/>}/> 
       <Route path='/dev' element={<Dev />} />
       <Route path='/trending' element={<Trending />} />
       <Route path='/action' element={<Action />} />
       <Route path='/Horror' element={<Horror />} />
       <Route path='/comedy' element={<Comedy />} />
       <Route path='/signup' element={<SignUp/>}>
       </Route>
       <Route path='/login' element={<Login />} />
        
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
