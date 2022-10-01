import {
  Box,
  Divider,
  Heading,
  HStack,
  IconButton,
  Img,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import appleLogo from "../Image/applestore.svg";
import googleLogo from "../Image/googleplaystore.svg";
function Footer() {
  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} bgColor="#f7f8f9" spacing={2}>
        <Box>
          <Img
            src="https://statics.olx.in/external/base/img/phone-app.webp"
            alt="olx"
          />
        </Box>
        <Box>
          <Heading align="center">TRY THE OLX APP</Heading>
          <Text align="center" fontSize="xl" fontWeight="semibold" mt={2}>
            Buy, sell and find just about anything using the app on your mobile.
          </Text>
        </Box>
        {/* <Divider orientation="vertical" display={["none", "flex"]} /> */}
        <Box p={10}>
          <Text fontSize="xl" fontWeight="semibold">
            GET YOUR APP TODAY
          </Text>
          <HStack mt="20px" justify="center" h="60px">
            <Img
              cursor="pointer"
              onClick={() =>
                window.open(
                  "https://itunes.apple.com/in/app/olx-buy-sell-near-you/id913492792?mt=8"
                )
              }
              w="50%"
              src={appleLogo}
              alt="applelogo"
            />
            <Img
              cursor="pointer"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.olx.southasia"
                )
              }
              w="50%"
              src={googleLogo}
              alt="googlelogo"
            />
          </HStack>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={[1, 3, 3, 5]} spacing={10} p={5} bgColor="#ebeeef">
        <Box w="250px">
          <UnorderedList listStyleType="none" spacing={2}>
            <Text fontWeight="semibold" fontSize="18px">
              POPULAR LOCATIONS
            </Text>
            <ListItem>Kolkata</ListItem>
            <ListItem>Mumbai</ListItem>
            <ListItem>Chennai</ListItem>
            <ListItem>Pune</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList listStyleType="none" spacing={2}>
            <Text fontWeight="semibold" fontSize="18px">
              TRENDING LOCATIONS
            </Text>
            <ListItem>Bhubaneshwar</ListItem>
            <ListItem>Hyderabad</ListItem>
            <ListItem>Chandigarh</ListItem>
            <ListItem>Nashik</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList listStyleType="none" spacing={2}>
            <Text fontWeight="semibold" fontSize="18px">
              ABOUT US
            </Text>
            <ListItem
              cursor="pointer"
              onClick={() => window.open("https://www.olxgroup.com/")}
            >
              About OLX Group
            </ListItem>
            <ListItem
              cursor="pointer"
              onClick={() => window.open("https://www.olxgroup.com/careers")}
            >
              Careers
            </ListItem>
            <ListItem
              cursor="pointer"
              onClick={() => window.open("hhttps://help.olx.in/hc/en-us")}
            >
              Contact Us
            </ListItem>
            <ListItem
              cursor="pointer"
              onClick={() => window.open("https://www.olxpeople.com/")}
            >
              OLX People
            </ListItem>
            <ListItem
              cursor="pointer"
              onClick={() => window.open("https://www.waahjobs.com/")}
            >
              Waah Jobs
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList listStyleType="none" spacing={2}>
            <Text fontWeight="semibold" fontSize="18px">
              OLX
            </Text>
            <ListItem
              cursor="pointer"
              onClick={() => window.open("https://help.olx.in/hc/en-us")}
            >
              Help
            </ListItem>
            <ListItem
              cursor="pointer"
              onClick={() =>
                window.open("https://www.olx.in/en-in/sitemap/most-popular")
              }
            >
              Sitemap
            </ListItem>
            <ListItem
              cursor="pointer"
              onClick={() =>
                window.open(
                  "https://help.olx.in/hc/en-us/categories/360000528860-Legal-Privacy-information"
                )
              }
            >
              Legal & Privacy information
            </ListItem>
            <ListItem
              cursor="pointer"
              onClick={() => window.open("https://www.olx.in/blog")}
            >
              Blog
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontWeight="semibold" fontSize="18px">
            FOLLOW US ON
          </Text>
          <HStack mt={2}>
            <IconButton
              onClick={() =>
                window.open("https://www.instagram.com/olx_india/")
              }
              borderRadius="50%"
              icon={<FaInstagram />}
            />
            <IconButton
              onClick={() => window.open("https://twitter.com/OLX_India")}
              borderRadius="50%"
              icon={<FaTwitter />}
            />
            <IconButton
              onClick={() => window.open("https://www.facebook.com/olxindia/")}
              borderRadius="50%"
              icon={<FaFacebookF />}
            />
            <IconButton
              onClick={() =>
                window.open("https://www.youtube.com/user/OLXInTv")
              }
              borderRadius="50%"
              icon={<FaYoutube />}
            />
          </HStack>
          <HStack>
            <Img
              cursor="pointer"
              onClick={() =>
                window.open(
                  "https://itunes.apple.com/in/app/olx-buy-sell-near-you/id913492792?mt=8"
                )
              }
              w="50%"
              src={appleLogo}
              alt="applelogo"
            />
            <Img
              cursor="pointer"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.olx.southasia"
                )
              }
              w="50%"
              src={googleLogo}
              alt="googlelogo"
            />
          </HStack>
        </Box>
      </SimpleGrid>

      <Box bgColor="#002f34" p={5}>
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <HStack>
            <Text color="white" fontWeight="semibold">
              Other Countries
            </Text>
            <Link color="white">India</Link>
            <Divider w="5px" />
            <Link color="white">Pakistan</Link>
            <Divider w="5px" />
            <Link color="white">Indonesia</Link>
          </HStack>
          <HStack justify="right">
            <Text color="white">All rights reserved © 2006-2022 OLX</Text>
          </HStack>
        </SimpleGrid>
      </Box>
    </>
  );
}

export { Footer };
