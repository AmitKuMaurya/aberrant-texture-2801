import React from "react";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { AiOutlineCar, AiOutlineMobile, AiOutlineRight } from "react-icons/ai";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { RiShoppingBagLine, RiEBike2Line } from "react-icons/ri";
import { FcElectronics } from "react-icons/fc";
import {
  GiTransparentSlime,
  GiFullWoodBucket,
  GiAnimalSkull,
} from "react-icons/gi";
import { SiAltiumdesigner } from "react-icons/si";
import { MdSportsTennis } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
import FootStrip from "./FootStrip";

const categorylist = [
  {
    id: 1,
    title: "OLX Autos (Cars)",
    icon: <AiOutlineCar fontSize={"1.4rem"} />,
  },
  {
    id: 2,
    title: "Properties",
    icon: <TbBuildingSkyscraper fontSize={"1.4rem"} />,
  },
  {
    id: 3,
    title: "Mobiles",
    icon: <AiOutlineMobile fontSize={"1.4rem"} />,
  },
  {
    id: 4,
    title: "Jobs",
    icon: <RiShoppingBagLine fontSize={"1.4rem"} />,
  },
  {
    id: 5,
    title: "Bikes",
    icon: <RiEBike2Line fontSize={"1.4rem"} />,
  },
  {
    id: 6,
    title: "Electronics & Appliances",
    icon: <FcElectronics fontSize={"1.4rem"} />,
  },
  {
    id: 7,
    title: "Commercial Vehicles & Spares",
    icon: <GiTransparentSlime fontSize={"1.4rem"} />,
  },
  {
    id: 8,
    title: "Furniture",
    icon: <GiFullWoodBucket fontSize={"1.4rem"} />,
  },
  {
    id: 9,
    title: "Fashion",
    icon: <SiAltiumdesigner fontSize={"1.4rem"} />,
  },
  {
    id: 10,
    title: "Books, Sports & Hobbies",
    icon: <MdSportsTennis fontSize={"1.4rem"} />,
  },
  {
    id: 11,
    title: "Pets",
    icon: <GiAnimalSkull fontSize={"1.4rem"} />,
  },
  {
    id: 12,
    title: "Services",
    icon: <GrServices fontSize={"1.4rem"} />,
  },
];

function SellPage() {
  return (
    <>
      <Heading
        as="h4"
        size="lg"
        textAlign="center"
        marginTop="2rem"
        marginBottom="2rem"
      >
        POST YOUR AD
      </Heading>
      <SimpleGrid margin={"auto"} maxW={"50%"} border={"1px solid #ebeaea"}>
        <Heading
          style={{ marginLeft: "1.5rem" }}
          as="h4"
          size="md"
          textAlign="left"
          marginTop="1rem"
          marginBottom="1rem"
        >
          CHOOSE A CATEGORY
        </Heading>
        {categorylist.map((item) => (
          <Box key={item.id}>
            <Stack style={{ display: "flex" }} border={"1px solid #ebeaea"}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <span style={{ marginRight: "1rem", marginLeft: "0.5rem" }}>
                    {item.icon}
                  </span>
                  <Link
                    to={"/sellpost/postform"}
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <Text
                      textAlign={"left"}
                      marginTop="0.3rem"
                      marginBottom="0.3rem"
                      fontSize={"xl"}
                    >
                      {item.title}
                    </Text>
                  </Link>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <AiOutlineRight fontSize={"1.5rem"} />
                </Box>
              </Box>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>

      <FootStrip />
    </>
  );
}

export default SellPage;
