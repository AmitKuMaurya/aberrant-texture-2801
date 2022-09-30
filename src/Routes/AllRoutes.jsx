import { Route, Routes } from "react-router-dom"
import { Bike } from "../component/Bike/Bike"
import { SingleBike } from "../component/Bike/SingleBike"
import { Car } from "../component/Car/Car"
import { SingleCar } from "../component/Car/SingleCar"
import { Mobile } from "../component/Mobile/Mobile"
import { SingleMobile } from "../component/Mobile/SingleMobile"


export const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/cars" element={<Car/>} />
        <Route path="/cars/:id" element={<SingleCar/>} />
        <Route path="/bikes" element={<Bike/>} />
        <Route path="/bikes/:id" element={<SingleBike/>} />
        <Route path="/mobiles" element={<Mobile/>} />
        <Route path="/mobiles/:id" element={<SingleMobile/>} />
      </Routes>
    )}