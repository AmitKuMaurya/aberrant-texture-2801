import { Route, Routes } from "react-router-dom";
import { Bike } from "../CategoryPages/Bike/Bike";
import { SingleBike } from "../CategoryPages/Bike/SingleBike";
import { Car } from "../CategoryPages/Car/Car";

import { SingleCar } from "../CategoryPages/Car/SingleCar";
import { Mobile } from "../CategoryPages/Mobile/Mobile";
import { SingleMobile } from "../CategoryPages/Mobile/SingleMobile";
import ErroPage from "../Component/ErroPage";
import HomePage from "../Component/HomePage";
import SingleAdsItem from "../MainRoutes/AdsPage";
// import AdsRows from "../MainRoutes/AdsRows";
import SellFormPage from "../MainRoutes/SellFormPage";
// import SellPage from "../MainRoutes/SellPage";
import AdsList from "../Sell_Components/AdsList";
// import AdsList from "../Sell_Components/AdsList";
import FormSuccess from "../Sell_Components/FormSuccess";
import SellFormComponent from "../Sell_Components/SellFormComponent";
import PrivateRoute from "./PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/cars"
        element={
          // <PrivateRoute>
          <Car />
          // </PrivateRoute>
        }
      />
      <Route
        path="/adslist"
        element={
          // <PrivateRoute>
          <AdsList />
          // </PrivateRoute>
        }
      />
      <Route
        path="/adslist/:id"
        element={
          <PrivateRoute>
            <SingleAdsItem />
          </PrivateRoute>
        }
      />
      <Route path="/cars/:id" element={<SingleCar />} />
      <Route path="/bikes" element={<Bike />} />
      <Route path="/bikes/:id" element={<SingleBike />} />
      <Route path="/mobiles" element={<Mobile />} />
      <Route path="/mobiles/:id" element={<SingleMobile />} />

      {/* <Route path="/adsrows" element={<AdsList />}/>
      <Route path="/adsrows/:id" element={<SingleAdsItem />} /> */}
      <Route
        path="/sellpost"
        element={
          <PrivateRoute>
            <SellFormComponent />
          </PrivateRoute>
        }
      />
      <Route
        path="/sellpost/postform"
        element={
          // <PrivateRoute>
          <SellFormPage />
          //</PrivateRoute>
        }
      />
      <Route
        path="/sellpost/postform/success"
        element={
          // <PrivateRoute>
          <FormSuccess />
          // </PrivateRoute>
        }
      />

      <Route path="*" element={<ErroPage />} />
    </Routes>
  );
};
