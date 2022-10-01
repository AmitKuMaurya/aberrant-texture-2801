import React from 'react'
import { Footer } from './Component/Footer';
import Navbar from './Component/Navbar';
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (
    <>
    <Navbar/>
    <MainRoutes/>
    <Footer/>
    </>
  )
}

export default App