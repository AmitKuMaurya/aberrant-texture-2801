import { Route, Routes } from "react-router-dom"
import { Bike } from "../component/Bike/Bike"
import { Car } from "../component/Car/Car"
import { Mobile } from "../component/Mobile/Mobile"


export const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/cars" element={<Car/>} />
        <Route path="/bikes" element={<Bike/>} />
        <Route path="/mobiles" element={<Mobile/>} />
      </Routes>
    )}