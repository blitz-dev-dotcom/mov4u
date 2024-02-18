import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/footer';


function App() {
  const [toggle , settoggle] = useState(false);
  function updater(bool){
    settoggle(bool);
  }
  
  return (
    <div className="App" >
      <Header value={toggle} func = {updater} />
      <Home togglev={toggle} />
      <div className="footer" style={{backgroundColor: `rgb(31, 29, 29)`}}>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
