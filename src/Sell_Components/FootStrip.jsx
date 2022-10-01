import { Box, Stack } from '@chakra-ui/react';
import React from 'react'

function FootStrip() {
  return (
    <>
    <Box bgColor={"#002f34"} marginTop={"2rem"}>

    <Box  maxW={"80%"} style={{display : "flex",justifyContent:"space-between",margin:"auto",alignItems:"center"}}>
        <Stack style={{display : "flex",maxWidth:"30rem",justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
            <p style={{color:"white",fontWeight:"600"}}>Other Countries --  </p>
            <p style={{color:"white",marginTop:"0.2rem"}}> Pakistan - South Africa - Indonesia</p>
        </Stack>
        <Stack style={{display : "flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
            <p style={{color:"white",fontWeight:"600"}}>Free Classifieds in India . </p>
            <p style={{color:"white",marginTop:"0.2rem"}}>© 2006-2022 OLX</p>
        </Stack>
    </Box>
    </Box>
    </>
  )
}

export default FootStrip;