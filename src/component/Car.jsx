import React, { useEffect } from 'react'
import { Box, Container, SimpleGrid, Flex, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'


export const Car = () => {

   const [data, setData] = useState([])

    const fetchApi = () => {
    return   axios.get("http://localhost:3004/cars")
      .then( r => setData(r.data))
      .catch(e => console.log(e))
    }


     useEffect(() => {

       fetchApi()
       
     }, [])

    console.log(data)

  return (
 <>
    <Text fontSize="2xl" fontWeight="600" align ="left" width="80%" margin="auto">Used Cars in Kochi</Text>

  {/* FILTER COMPONENTS */}

  <Flex  style={{ width:"80%", margin: "auto"}} >
  <Container align="left" style={{ width : "30%"}}> 
    <Box >
      <Text >CATEGORIES</Text>
    </Box>

    <Box >
    <Text >LOCATIONS</Text>
    </Box>

    <Box >
    <Text >BRAND AND MODEL</Text>
    </Box>

    <Box >
    <Text >ALL MODELS</Text>
    </Box>

    <Box >
    <Text >BUDGET</Text>
    </Box>

    <Box >
    </Box>
    

    </Container>
      
     {/* PRODUCT GRID  */}

    <Box  width="70%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
        <Flex justifyContent="space-between" mb="10px">
        <Text  fontSize={["xs","sm","md"]}>29,970 ads near Kochi</Text>
        <Box>
          <Flex>
          <Text fontWeight="bold" fontSize={["xs", "sm", "md"]}>Sort By:</Text>
          <select>
           <option value="volvo">Relevance</option>
           <option value="saab">Price: Low to High</option>
           <option value="vw">Price: High to Low</option>
           <option value="audi" selected>Distance</option>
           <option value="audi" selected>Date Published</option>
        </select>
          </Flex>
        </Box>
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing='30px' bgColor="#ffffff" borderTop="1px solid grey">
      {data.map((car) => (
          <Box key={car.id}  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", minHeight: "100px",
          overflow: "hidden"}} height={["300px"]}> 
           <Box padding="0 2rem" height="60%">  
           <Image  src={car.image} height="100%" pt="2px"/>
          </Box>

          <Box padding="0 1rem" height="40%" mt="1rem">
          <Text align="left" mb="0.2rem" style={{fontWeight : "700",  letterSpacing: ".16px"}}>₹ {car.price}</Text>
          <Text align="left" mb="0.2rem" fontSize={["xs","xs", "sm"]} color="#9badaf">{car.year}-{car.km}</Text>
          <Text align="left" mb="0.2rem" fontSize={["sm","md", "md"]} style={{fontWeight : "600"}}>{car.title}</Text>
          <Flex justifyContent="space-between" mb="0.2rem">
          <Text fontSize={["xs","xs", "xs"]} fontWeight="lighter">{car.place}</Text>
          <Text fontSize={["xs","xs", "xs"]} >{car.date}</Text>
          </Flex>
          </Box>

          
          </Box>

          
        ))}
  </SimpleGrid>
   </Box>
  </Flex>
  </>
 )
}
