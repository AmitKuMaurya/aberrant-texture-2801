import { Img } from "@chakra-ui/react";
import React from "react";
import banner from "../Image/banner.png";
const HomePage = () => {
  return (
    <div>
      <Img src={banner} alt="banner" />
    </div>
  );
};

export default HomePage;
