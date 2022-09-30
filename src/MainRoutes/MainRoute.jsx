import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FormSuccess from '../Sell_Components/FormSuccess';
import SellFormPage from './SellFormPage';
import SellPage from './SellPage';

function MainRoute() {
  return (
    <>
    <Routes>
        <Route path={"/sellpost"} element={<SellPage/>} />
        <Route path={"/sellpost/postform"} element={<SellFormPage/>} />   
        <Route path={"/sellpost/postform/success"} element={<FormSuccess/>} />   
    </Routes>
    </>
  )
}

export default MainRoute