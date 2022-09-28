import React from 'react'
import { Box, Button, Heading,Stack, Text } from "@chakra-ui/react";
import {AiOutlineCar,AiOutlineMobile} from "react-icons/ai";
import {TbBuildingSkyscraper} from 'react-icons/tb'
import {RiShoppingBagLine,RiEBike2Line} from "react-icons/ri";
import {FcElectronics} from 'react-icons/fc';
import {GiTransparentSlime,GiFullWoodBucket,GiAnimalSkull} from 'react-icons/gi';
import {SiAltiumdesigner} from 'react-icons/si';
import {MdSportsTennis} from 'react-icons/md';
import {GrServices} from 'react-icons/gr';

const categorylist = [
  {
    id: 1,
    title: "OLX Autos (Cars)",
    icon : <AiOutlineCar/>
  },
  {
    id: 2,
    title: "Properties",
    icon : <TbBuildingSkyscraper/>
  },
  {
    id: 3,
    title: "Mobiles",
    icon : <AiOutlineMobile/>,
  },
  {
    id: 4,
    title: "Jobs",
    icon : <RiShoppingBagLine/>,
  },
  {
    id: 5,
    title: "Bikes",
    icon : <RiEBike2Line/>,
  },
  {
    id: 6,
    title: "Electronics & Appliances",
    icon : <FcElectronics/>,
  },
  {
    id: 7,
    title: "Commercial Vehicles & Spares",
    icon : <GiTransparentSlime/>,
  },
  {
    id: 8,
    title: "Furniture",
    icon : <GiFullWoodBucket/>,
  },
  {
    id: 9,
    title: "Fashion",
    icon : <SiAltiumdesigner/>,
  },
  {
    id: 10,
    title: "Books, Sports & Hobbies",
    icon : <MdSportsTennis/>,
  },
  {
    id: 11,
    title: "Pets",
    icon : <GiAnimalSkull/>,
  },
  {
    id: 12,
    title: "Services",
    icon : <GrServices/>,
  }
];


function SellComponents() {
  return (
    <>
        <Heading >
        POST YOUR AD
      </Heading>

      {categorylist.map((item) => (
        <Box key={item.id}>

          <Stack>
           <div style={{display:"flex", alignItems:"center"}}>
            {item.icon}
            <Text maxW={"20rem"} padding={"0.6rem 0.4rem"} border={"1px solid grey"} marginTop={"1rem"} >{item.title}
            </Text>
           </div>
            
          </Stack>
        </Box>
      ))}
    </>
  )
}

export default SellComponents