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
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaUser, FaUserAlt } from "react-icons/fa";
import "./Navbar.css";
import SellButtonPlus from "./SellButtonPlus";
import olxlogo from "../Image/olxlogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer } from "./Footer";
import AllCategories from "./AllCategories";
import { Login } from "./loginnew";
import { AuthContext } from "../Context/AuthContext";

const fetchData = (query) => {
  axios("");
};

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [query, setQuery] = useState("");

  useEffect(() => {});

  return (
    <>
      <Stack
        bgColor="#eff1f3"
        // border="1px solid black"
        px={2}
        py={3}
        position="sticky"
        top={0}
        zIndex={9}
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
                placeholder="Find Cars, Mobile Phones and more..."
                focusBorderColor="teal.300"
                border="2px"
                borderStyle="solid"
                borderColor="black"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
              {isAuth && (
                <ChatIcon
                  w={5}
                  h={5}
                  cursor="pointer"
                  _hover={{ color: "teal" }}
                />
              )}
              {isAuth && (
                <BellIcon
                  w={6}
                  h={6}
                  cursor="pointer"
                  _hover={{ color: "teal" }}
                />
              )}
              {/* <Img src="" alt="user image" /> */}

              {isAuth ? (
                <Menu>
                  <MenuButton transition="all 0.2s">
                    <FaUser />
                  </MenuButton>
                  <MenuList borderRadius={0}>
                    <HStack spacing={10} p={2}>
                      <Img src={olxlogo} w="40px" h="30px" />
                      <Box>
                        <Text>Hello,</Text>
                        <Text>Shantilal Patliya</Text>
                        <Button color="black" fontWeight="none" variant="link">
                          View And Edit Profile
                        </Button>
                      </Box>
                    </HStack>
                    <MenuItem>
                      <Link to="/adslist">My ADS</Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>Open...</MenuItem>
                    <MenuItem>Save File</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <>
                  <IconButton
                    bgColor="gray.200"
                    icon={<FaUser />}
                    borderRadius="full"
                    _hover={{ color: "teal" }}
                    onClick={onOpen}
                  />
                  <Login onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
                </>
              )}

              <Link to={"/sellpost"}>
              <Button
                _hover={{ bgColor: "white" }}
                bgColor="white"
                borderRadius="30px"
                className="sellbtn"
              >
                <SellButtonPlus />
                Sell
              </Button>
              </Link>
            </HStack>
          </GridItem>
        </Grid>
      </Stack>
      <HStack
        px={10}
        h="40px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        fontSize="14px"
        spacing="10px"
        display={["none", "none", "flex", "flex"]}
      >
        <Menu offset={[-22, 0]}>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                variant="unstyled"
                as={Button}
                textDecoration="none"
                rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
              >
                All Categories
              </MenuButton>
              <MenuList borderRadius="none" w="96vw">
                <AllCategories />
              </MenuList>
            </>
          )}
        </Menu>

        <Link to="/cars" className="navmenu">
          Cars
        </Link>
        <Link to="/bikes" className="navmenu">
          Motorcycles
        </Link>
        <Link to="/mobiles" className="navmenu">
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

      <VStack display={["flex", "flex", "none", "none"]} align="left">
        <Menu offset={[20, 0]}>
          {({ isOpen }) => (
            <>
              {/* <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? "Close" : "Open"}
              </MenuButton> */}

              <MenuButton
                isActive={isOpen}
                variant="unstyled"
                as={Button}
                textDecoration="none"
                rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
              >
                All Categories
              </MenuButton>
              <MenuList borderRadius="none" w="92vw">
                <AllCategories />
              </MenuList>
            </>
          )}
        </Menu>
      </VStack>
    </>
  );
};

export default Navbar;
