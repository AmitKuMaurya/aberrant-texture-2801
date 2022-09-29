import { Img, Stack } from "@chakra-ui/react";
import React from "react";
import banner from "../Image/banner.png";
const HomePage = () => {
  return (
    <Stack h="1000px">
      <Img src={banner} alt="banner" />
    </Stack>
  );
};

export default HomePage;
