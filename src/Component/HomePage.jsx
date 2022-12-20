import {
  Badge,
  Box,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../Image/banner.png";
import Navbar from "./Navbar";

export const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [mobiles, setMobiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://project-api-ytxm.onrender.com/olxcars", {
        params: {
          _limit: 10,
        },
      })
      .then((r) => {
        setProduct(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://project-api-ytxm.onrender.com/olxmobiles", {
        params: {
          _limit: 10,
        },
      })
      .then((r) => {
        setMobiles(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(product);
  return (
    <>
      <Stack>
        <Img src={banner} alt="banner" />
      </Stack>

      <Stack p={5} spacing={10}>
        <Heading>Cars</Heading>
        <SimpleGrid columns={[2, 2, 4, 4]} spacing={10}>
          {product.map((item) => {
            return (
              <Box
                key={item.id}
                border="1px solid #dbd9d9"
                h="300px"
                borderRadius="10px"
                cursor="pointer"
                onClick={() => navigate(`/cars/${item.id}`)}
              >
                <Img
                  src={item.image}
                  h="70%"
                  w="100%"
                  alt="product_image"
                  borderTopLeftRadius="10px"
                  borderTopRightRadius="10px"
                />
                <Text fontSize="xl" fontWeight="semibold" ml={3} mt={2}>
                  ₹ {item.price}
                </Text>
                <Text
                  ml={3}
                  fontWeight="normal"
                >{`${item.year} - ${item.driven}`}</Text>

                <HStack px={3}>
                  <Text>{item.brand}</Text>
                  <Spacer />
                  <Text>{item.city}</Text>
                  {/* <Text>{item.}</Text> */}
                </HStack>
              </Box>
            );
          })}
        </SimpleGrid>

        <Heading>Mobiles</Heading>
        <SimpleGrid columns={[2, 2, 4, 4]} spacing={10}>
          {mobiles.map((item) => {
            return (
              <Box
                key={item.id}
                border="1px solid #dbd9d9"
                h="300px"
                borderRadius="10px"
                align="center"
                cursor="pointer"
                onClick={() => navigate(`/mobiles/${item.id}`)}
              >
                <Img
                  src={item.image}
                  h="70%"
                  alt="product_image"
                  borderTopLeftRadius="10px"
                  borderTopRightRadius="10px"
                />
                <Text fontSize="xl" fontWeight="semibold" ml={3} mt={2}>
                  ₹ {item.price}
                </Text>
                <Text ml={3} fontWeight="normal">
                  {item.name}
                  <Badge ml="1" colorScheme="yellow">
                    New
                  </Badge>
                </Text>

                <HStack px={3}>
                  <Text>{item.brand}</Text>
                  <Spacer />
                  <Text>{item.city}</Text>
                  {/* <Text>{item.}</Text> */}
                </HStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default HomePage;
