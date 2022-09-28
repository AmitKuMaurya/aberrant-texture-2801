import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SellPage from './SellPage';

function MainRoute() {
  return (
    <>
    <Routes>
        <Route path={"/sellpost"} element={<SellPage/>} />
        {/* <Route path={"/sellpost/:name"} element={""} />     */}
    </Routes>
    </>
  )
}

export default MainRoute