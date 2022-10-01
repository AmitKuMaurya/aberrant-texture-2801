import {
  Box,
  Button,
  HStack,
  Img,
  Link,
  LinkBox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGoogle, FaMobile } from "react-icons/fa";

function Login({ onOpen, isOpen, onClose }) {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Box p={5}></Box>
              <Box w="100%">
                <HStack
                  border="2px solid black"
                  w="100%"
                  mb="5px"
                  px={5}
                  py={2}
                  borderRadius="5px"
                >
                  <FaMobile />
                  <Text fontWeight="bold">Continue With Phone</Text>
                </HStack>
                <HStack
                  border="2px solid black"
                  px={5}
                  py={2}
                  borderRadius="5px"
                >
                  <FaGoogle />
                  <Text fontWeight="bold">Continue With Google</Text>
                </HStack>
              </Box>
              <Text>OR</Text>
              <Link textDecoration="underline">Login With Email</Link>
            </VStack>
            <VStack mt={10} px={10}>
              <Text align="center">
                All your personal details are safe with us.
              </Text>
              <Text>
                If you continue, you are accepting
                <Text as="span" color="blue">
                  <Link>OLX Terms and Conditions and Privacy Policy</Link>
                </Text>
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { Login };
