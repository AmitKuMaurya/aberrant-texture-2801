import React from "react";
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const AllCategories = () => {
  return (
    <div>
      <SimpleGrid columns={[1, 3, 4, 4]} spacing={2} p={5}>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Properties
            </Text>
            <Link className="categories-link" to="#">
              For Sale: Houses & Apartments
            </Link>
            <Link className="categories-link" to="#">
              For Rent: Houses & Apartments
            </Link>
            <Link className="categories-link" to="#">
              Lands & Plots
            </Link>
            <Link className="categories-link" to="#">
              For Rent: Shops & Offices
            </Link>
            <Link className="categories-link" to="#">
              For Sale: Shops & Offices
            </Link>
            <Link className="categories-link" to="#">
              PG & Guest Houses
            </Link>
          </VStack>
        </Box>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Jobs
            </Text>
            <Link className="categories-link" to="#">
              Data entry & Back office
            </Link>
            <Link className="categories-link" to="#">
              Sales & Marketing
            </Link>
            <Link className="categories-link" to="#">
              BPO & Telecaller
            </Link>
            <Link className="categories-link" to="#">
              Driver
            </Link>
            <Link className="categories-link" to="#">
              Office Assistant
            </Link>
            <Link className="categories-link" to="#">
              Teacher
            </Link>
            <Link className="categories-link" to="#">
              Cook
            </Link>
          </VStack>
        </Box>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Electronics & Appliances
            </Text>
            <Link className="categories-link" to="#">
              TVs, Video - Audio
            </Link>
            <Link className="categories-link" to="#">
              Computers & Laptops
            </Link>
            <Link className="categories-link" to="#">
              Games & Entertainment
            </Link>
            <Link className="categories-link" to="#">
              Hard Disks, Printers & Monitors
            </Link>
            <Link className="categories-link" to="#">
              Fridges
            </Link>
            <Link className="categories-link" to="#">
              Washing Machines
            </Link>
          </VStack>
        </Box>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Furniture
            </Text>
            <Link className="categories-link" to="#">
              Sofa & Dining
            </Link>
            <Link className="categories-link" to="#">
              Beds & Wardrobes
            </Link>
            <Link className="categories-link" to="#">
              Home Decor & Garden
            </Link>
            <Link className="categories-link" to="#">
              Kids Furniture
            </Link>
            <Link className="categories-link" to="#">
              Other Household Items
            </Link>
          </VStack>
        </Box>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Services
            </Text>
            <Link className="categories-link" to="#">
              Electronics & Computer
            </Link>
            <Link className="categories-link" to="#">
              Education & Classes
            </Link>
            <Link className="categories-link" to="#">
              Drivers & Taxi
            </Link>
            <Link className="categories-link" to="#">
              Health & Beauty
            </Link>
            <Link className="categories-link" to="#">
              Other Services
            </Link>
          </VStack>
        </Box>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Fashion
            </Text>
            <Link className="categories-link" to="#">
              Men
            </Link>
            <Link className="categories-link" to="#">
              Women
            </Link>
            <Link className="categories-link" to="#">
              Kids
            </Link>
          </VStack>
        </Box>{" "}
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Mobiles
            </Text>
            <Link className="categories-link" to="#">
              Mobile Phone
            </Link>
            <Link className="categories-link" to="#">
              Accessories
            </Link>
            <Link className="categories-link" to="#">
              Tablet
            </Link>
          </VStack>
        </Box>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Bikes
            </Text>
            <Link className="categories-link" to="#">
              Motorcycles
            </Link>
            <Link className="categories-link" to="#">
              Scooters
            </Link>
            <Link className="categories-link" to="#">
              Spare Parts
            </Link>
            <Link className="categories-link" to="#">
              Bicycles
            </Link>
          </VStack>
        </Box>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Pets
            </Text>
            <Link className="categories-link" to="#">
              Fishes & Aquarium
            </Link>
            <Link className="categories-link" to="#">
              Pet Food & Accessories
            </Link>
            <Link className="categories-link" to="#">
              Dogs
            </Link>
            <Link className="categories-link" to="#">
              Other Pets
            </Link>
          </VStack>
        </Box>
        <Box>
          <VStack align="left" spacing={1}>
            <Text fontWeight="semibold" fontSize="18px">
              Commercial Vehicles & Spares
            </Text>
            <Link className="categories-link" to="#">
              Commercial & Other Vehicles
            </Link>
            <Link className="categories-link" to="#">
              Spare Parts
            </Link>
          </VStack>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default AllCategories;
