import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
 
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  
 
  Grid,
  GridItem,
  HStack,
  IconButton,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,

  Stack,

} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaUser } from "react-icons/fa";
import "./Navbar.css";
import SellButtonPlus from "./SellButtonPlus";
import olxlogo from "../Image/olxlogo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const handleCategories = () => {
    setCategoryOpen(!isCategoryOpen);
  };
  return (
    <>
      <Stack
        bgColor="#eff1f3"
        // border="1px solid black"
        px={2}
        py={3}
        position="sticky"
        top={0}
      >
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={5}
        >
          <GridItem colSpan={1}>
            <HStack>
              <Img
                src={olxlogo}
                alt="olx logo"
                w="50px"
                cursor="pointer"
                onClick={() => navigate("/")}
              />
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.700" />}
                />
                <Input
                  borderRadius="none"
                  type="tel"
                  placeholder="Search City"
                  focusBorderColor="teal.300"
                  border="2px"
                  borderStyle="solid"
                  borderColor="black"
                />
                <InputRightElement
                  pointerEvents="none"
                  children={<ChevronDownIcon color="gray.700" />}
                />
              </InputGroup>
            </HStack>
          </GridItem>

          <GridItem colSpan={2}>
            <HStack spacing={0}>
              <Input
                colorScheme={"teal"}
                borderRadius="none"
                placeholder="Search City"
                focusBorderColor="teal.300"
                border="2px"
                borderStyle="solid"
                borderColor="black"
              />
              <Box
                border="2px solid black"
                bgColor="black"
                h="40px"
                w="40px"
                align="center"
                cursor="pointer"
              >
                <SearchIcon mt="30%" color="white" />
              </Box>
            </HStack>
          </GridItem>
          <GridItem colSpan={1}>
            <HStack spacing={5} justify="right">
              <ChatIcon w={5} h={5} />
              <BellIcon w={6} h={6} />
              {/* <Img src="" alt="user image" /> */}
              <IconButton
                bgColor="gray.200"
                icon={<FaUser />}
                borderRadius="full"
              />
              <Button bgColor="white" borderRadius="30px" className="sellbtn">
                <SellButtonPlus />
                Sell
              </Button>
            </HStack>
          </GridItem>
        </Grid>
      </Stack>
      <HStack
        px={10}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        fontSize="14px"
        spacing="10px"
      >
        <Button
          variant="unstyled"
          textDecoration="none"
          rightIcon={isCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}
          onClick={handleCategories}
        >
          All Categories
        </Button>
        <Link to="#" className="navmenu">
          Cars
        </Link>
        <Link to="#" className="navmenu">
          Motorcycles
        </Link>
        <Link to="#" className="navmenu">
          Mobile Phones
        </Link>
        <Link to="#" className="navmenu">
          For Sale: Houses & Apartments
        </Link>
        <Link to="#" className="navmenu">
          Scooters
        </Link>
        <Link to="#" className="navmenu">
          Commercial & Other Vehicles
        </Link>
        <Link to="#" className="navmenu">
          For Rent: Houses & Apartments
        </Link>
      </HStack>
    </>
  );
};

export default Navbar;
