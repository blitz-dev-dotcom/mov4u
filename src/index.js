import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout';
import Home from './components/Home';
import Dev from './components/Dev';
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom';
import Apicaller from './components/Apicaller';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home />} />
        <Route path='/tr'  element={<Apicaller/>}/> 
       <Route path='/dev' element={<Dev />} />

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router}/>
  

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
