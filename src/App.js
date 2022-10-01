import React from 'react'
import { Footer } from './Component/Footer';
import Navbar from './Component/Navbar';
import { MainRoutes } from './Routes/MainRoutes';

import {  IconButton, useDisclosure } from '@chakra-ui/react';
import { Login } from './Component/loginnew';
import { FaUser } from 'react-icons/fa';

function App() {

  

  return (
    <>
    <Navbar/>
    <MainRoutes/>
    <Footer/>
     {/* <ChakraProvider > */}
     
     {/* <IconButton
                bgColor="gray.200"
                icon={<FaUser />}
                borderRadius="full"
                _hover={{ color: "teal" }}
                onClick={onOpen}
              />
     <Login isOpen={isOpen} onOpen={onOpen} onClose={onClose}/> */}
    {/* </ChakraProvider> */}
    </>
  )
}

export default App