import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Mobiles from './Mobiles'
import SingleMobile from './SingleMobile'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Mobiles />} />
        <Route path='/mobiles/:id' element={<SingleMobile />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  )
}

export default MainRoutes