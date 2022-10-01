// import {
//   Box,
//   Button,
//   CloseButton,
//   HStack,
//   Img,
//   Input,
//   Link,
//   LinkBox,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Stack,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import notificationsImg from "../Image/notifications.webp";
// import { FaGoogle, FaMobile } from "react-icons/fa";
// import { useState } from "react";
// import { ArrowBackIcon } from "@chakra-ui/icons";
// import olxlogo from "../Image/olxlogo.png";

// function Login({ onOpen, isOpen, onClose }) {
//   const [isEmailLogin, setisEmailLogin] = useState(false);
//   return (
//     <>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalCloseButton />

//           <ModalBody>
//             {isEmailLogin ? (
//               <>
//                 <ModalHeader>
//                   <ArrowBackIcon
//                     color="red.500"
//                     cursor="pointer"
//                     onClick={() => setisEmailLogin(false)}
//                   />
//                 </ModalHeader>
//                 <VStack spacing={3} h="90vh">
//                   <Box p={5} h="100px">
//                     <Img src={olxlogo} h="100%" />
//                   </Box>
//                   <Text fontSize="2xl" fontWeight="semibold">
//                     Enter Your Email To Login
//                   </Text>
//                   <Stack w="100%">
//                     <Input
//                       placeholder="Email"
//                       size="lg"
//                       focusBorderColor="teal.300"
//                     />
//                   </Stack>
//                   <Box bgColor="#fefbf0" p={3}>
//                     <Text>
//                       If you are a new user please select any other login option
//                       from previous page.
//                     </Text>
//                   </Box>
//                   <Button w="100%" size="lg">
//                     Next
//                   </Button>
//                   <Text px={5} align="center">
//                     Your email is never shared with external parties nor do we
//                     use it to spam you in any way.
//                   </Text>
//                 </VStack>
//               </>
//             ) : (
//               <>
//                 <VStack h="70vh">
//                   <Box p={5} h="200px">
//                     <Img src={notificationsImg} h="100%" />
//                   </Box>
//                   <Box w="100%">
//                     <HStack
//                       border="2px solid black"
//                       // _hover={{ border: "5px solid black" }}
//                       w="100%"
//                       mb="5px"
//                       px={5}
//                       py={2}
//                       borderRadius="5px"
//                     >
//                       <FaMobile />
//                       <Text fontWeight="bold">Continue With Phone</Text>
//                     </HStack>
//                     <HStack
//                       // _hover={{ border: "5px solid black" }}
//                       border="2px solid black"
//                       px={5}
//                       py={2}
//                       borderRadius="5px"
//                     >
//                       <FaGoogle />
//                       <Text fontWeight="bold">Continue With Google</Text>
//                     </HStack>
//                   </Box>
//                   <Text fontWeight="bold">OR</Text>
//                   <Button
//                     variant="link"
//                     color="black"
//                     onClick={() => setisEmailLogin(true)}
//                   >
//                     Login With Email
//                   </Button>
//                 </VStack>
//                 <VStack mt={10} px={10}>
//                   <Text align="center">
//                     All your personal details are safe with us.
//                   </Text>
//                   <Text>
//                     If you continue, you are accepting
//                     <Text as="span" color="blue">
//                       <Link>OLX Terms and Conditions and Privacy Policy</Link>
//                     </Text>
//                   </Text>
//                 </VStack>
//               </>
//             )}
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export { Login };
