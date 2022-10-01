import { Box, Button, Container, Flex, Grid, GridItem, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import style from "../Mobile/mobile.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getMobiles } from '../../Redux/Mobiles/action';



export const SingleMobile = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  const mobiles = useSelector((state) => state.MobileReducer.mobiles)
  const dispatch = useDispatch();

  // console.log("mobiles", mobiles)


 const getMobileById = (id) => {
    return axios(`https://olx-project-api.herokuapp.com/mobiles/${id}`)
  };

  useEffect(() => {
    getMobileById(id)
      .then((r) => {
        setData(r.data);
      })
      .catch((err) => {
        console.log(err)
      });

       dispatch(getMobiles())

  }, [id]);


  return (
    <>
      <Grid
        // gridAutoRows = 'minmax(100px, auto)'
        // height="100px"
        templateRows='repeat(300px, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={5}  margin="auto" width='80%'
      >
       <GridItem rowSpan={2} colSpan={3} bg='black'>        {/*images */}
             <Image  src={data.image} height="450px" w="480px" margin="1rem auto"/>
        </GridItem>


        <GridItem rowSpan={1} colSpan={2} style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} p="1rem">     {/*price mobiled */}
               <Flex justifyContent="space-between">
                <Box>
                   <Text fontSize="3xl" fontWeight="bold">₹  {data.price}</Text>
                </Box>
                <Flex>
                   <Image src="https://cdn-icons-png.flaticon.com/512/1358/1358023.png" width="40px" p="10px"/>
                   <Image src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" width="40px" p="10px"/>
                </Flex>
               </Flex>
               <Box>
                <Text align="left">{data.description}</Text>
               </Box>
                <Flex justifyContent="space-between">
                <Text align="right" mt="15%" p="5px">{data.city},{data.state}</Text>
                <Text align="right" mt="15%" p="5px">{data.date}</Text>
                </Flex>

        </GridItem>

        <GridItem p="1rem" rowSpan={1} colSpan={2} style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>    {/* seller info */}
           <Box>
            <Text align="left" fontSize="xl" mt="2rem" mb="1rem">Seller description</Text>
           </Box>     

          <Flex>
           <Image src={data.image} borderRadius="50px" width="50px"/>
           <Box p="0.5rem" align="left"> 
            <Text fontWeight="bold" fontSize="md">Genuine Mobiles By SAAS MOBILES</Text>
            <Text> Member since {data.date}</Text>
           </Box>
          </Flex>

          <Box>
          <Button colorScheme='black' variant='outline' width="90%" p="1rem" m="auto" border="2px solid"
          mt="2rem">
             Chat with the seller
          </Button>
          </Box>

        </GridItem>  


        <GridItem rowSpan={6} colSpan={3} style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>    {/*description */}
          <Box p="10px">
           <Text fontSize="2xl" fontWeight="bold" align="left">Details</Text>
            <br />
            <Flex justifyContent="space-around" color="grey">
                <Text>Brand</Text>
                <Spacer />
                <Text>{data.brand}</Text>
                <Spacer />
                <Text>Model</Text>
                <Spacer />
                <Text>{data.brand}</Text>
            </Flex>
                <br />
            {/* <Flex justifyContent="space-around" color="grey">
                <Text align="left">Year</Text>
                <Spacer />
                <Text>{data.year}</Text>
                <Spacer />
                <Text>KM driven</Text>
                <Spacer />
                <Text>{data.driven}</Text>
            </Flex> */}
          </Box>


          <Box p="10px">
          <Text fontSize="2xl" fontWeight="bold" align="left">Description</Text>          
          <Text align="left">Courier charges are applicabler</Text>
          <Text align="left">Cod available all over India</Text>
          <Text align="left"> With good condition</Text>
          <Text align="left">Well maintained</Text>
          <Text align="left">No scratches</Text>
          <Text align="left">Bluetooth: Yes</Text>
          <Text align="left">Mobile Outfitters Full Body Protection</Text>
          <Text align="left">Urgent money</Text>
          <Text align="left">Genuine customers contact me</Text>
          </Box>

        
         </GridItem>


        {/*mobileousel*/}


        <GridItem rowSpan={4} colSpan={3} style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} p="2rem">
        
        <Text fontSize="xl" fontWeight="bold" align="left" p="2rem"> Related ads </Text>

        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
 {mobiles.map((mobile) => (
          <SwiperSlide>    <Box key={mobile.id}  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", minHeight: "100px",
          overflow: "hidden"}} height={["300px"]} onClick={() => navigate((`/mobiles/${mobile.id}`))} >

           <Box padding="0 2rem" height="50%">  
           <Image  src={mobile.image} height="100%" pt="2px"/>
          </Box>

          <Box padding="0 1rem" height="40%" mt="1rem" className= {mobile.id < 4 ? style.yellowLine : style.noYellowLine}>  
          <Text align="left" mb="0.2rem" style={{fontWeight : "700",  letterSpacing: ".16px"}}>₹ {mobile.price}</Text>
          <Text align="left" mb="0.2rem" fontSize={["xs","xs", "sm"]} color="#9badaf">{mobile.year}-{mobile.driven} km</Text>
          <Text align="left" mb="0.2rem" fontSize={["sm","md", "md"]} style={{fontWeight : "600"}}>{mobile.title}</Text>
          <Flex justifyContent="space-between" mb="0.2rem">
          <Text fontSize={["xs","xs", "xs"]} fontWeight="lighter">{mobile.city},{mobile.state}</Text>
          <Text fontSize={["xs","xs", "xs"]} >{mobile.date}</Text>
          </Flex>
          </Box>

          </Box>
  
</SwiperSlide>
  ))}

    </Swiper>

        </GridItem>
      </Grid>
    </>
  )
}
