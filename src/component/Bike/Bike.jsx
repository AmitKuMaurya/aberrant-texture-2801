import React, { useEffect } from 'react'
import { Box, Container, SimpleGrid, Flex, Image, Text } from '@chakra-ui/react'
// import axios from 'axios'
// import { useState } from 'react'
import style from "../Mobile/mobile.module.css"
// import { SingleBike } from './SingleBike'
import { Link,useLocation,useNavigate, useSearchParams } from 'react-router-dom'
import FilterComp from '../FilterComp'
import { useDispatch, useSelector } from 'react-redux'
import { getBikes } from '../../Redux/Bikes/action'
import { SingleBike } from './SingleBike'


export const Bike = () => {

  //  const [bikes, setbikes] = useState([])
   const navigate = useNavigate()
  // //  <Link to={`/city/${id}`}>{id}</Link>

  //   const fetchApi = () => {
  //   return   axios.get("http://localhost:3004/bikes")
  //     .then( r => setbikes(r.bikes))
  //     .catch(e => console.log(e))
  //   }


  //    useEffect(() => {

  //      fetchApi()
       
  //    }, [])

  //   console.log(bikes)


  const bikes = useSelector((state) => state.BikeReducer.bikes);
  const [searchParams] =useSearchParams()
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location || bikes.length === 0) {

      const sortBy = searchParams.get('sortBy')

        let getBikesParams = {
            params: {
                state: searchParams.getAll('state'),
                _sort:  sortBy && "price",
                _order : sortBy
            },
        };
        // console.log(getMobilesParams)
      dispatch(getBikes(getBikesParams));
    }
  }, [location.search]);


    //  console.log(bikes)



  return (
 <>
    <Text fontSize="2xl" fontWeight="600" align ="left" width="80%" margin="auto">Used bikes in India</Text>

  {/* FILTER COMPONENTS */}

  <Flex  style={{ width:"80%", margin: "auto"}} >
  <Container align="left" style={{ width : "30%"}}> 
        
        <FilterComp/>
  
    </Container>
      
     {/* PRODUCT GRID  */}

    <Box  width="70%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
        <Flex justifyContent="space-between" mb="10px">
        <Text  fontSize={["xs","sm","md"]}>2590 ads </Text>
        <Box>
          <Flex>
          <Text fontWeight="bold" fontSize={["xs", "sm", "md"]}>Sort By:</Text>
          <select>
           <option>Relevance</option>
           <option>Price: Low to High</option>
           <option>Price: High to Low</option>
           <option>Distance</option>
           <option>Date Published</option>
         </select>
          </Flex>
        </Box>
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing='30px' bgColor="#ffffff" borderTop="1px solid grey">
      {bikes.map((bike) => (
          <Box key={bike.id}  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", minHeight: "100px",
          overflow: "hidden"}} height={["300px"]} onClick={() => navigate((`/bikes/${bike.id}`))} >

{ bike.id < 4  ? <Text align="left" fontSize="10px" fontWeight="700"  border="1px solid black" width="65px" bgColor="#ffce32" m="5px" textAlign="center"> FEATURED</Text> : ""}


           <Box padding="0 2rem" height="50%">  
           <Image  src={bike.image} height="100%" pt="2px"/>
          </Box>

          <Box padding="0 1rem" height="40%" mt="1rem" className= {bike.id < 4 ? style.yellowLine : style.noYellowLine}>  
          <Text align="left" mb="0.2rem" style={{fontWeight : "700",  letterSpacing: ".16px"}}>₹ {bike.price}</Text>
          <Text align="left" mb="0.2rem" fontSize={["xs","xs", "sm"]} color="#9badaf">{bike.year}-{bike.driven} km</Text>
          <Text align="left" mb="0.2rem" fontSize={["sm","md", "md"]} style={{fontWeight : "600"}}>{bike.title}</Text>
          <Flex justifyContent="space-between" mb="0.2rem">
          <Text fontSize={["xs","xs", "xs"]} fontWeight="lighter">{bike.city},{bike.state}</Text>
          <Text fontSize={["xs","xs", "xs"]} >{bike.date}</Text>
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
