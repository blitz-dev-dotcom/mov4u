import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';

function layout() {
  return (
   <>
    <Header />
    <Outlet />
    <Footer />
   </>
  )
}

export default layout