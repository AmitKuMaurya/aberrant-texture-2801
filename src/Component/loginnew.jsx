import {
  Box,
  Button,
  CloseButton,
  HStack,
  Img,
  Input,
  Link,
  LinkBox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import notificationsImg from "../Image/notifications.webp";
import { FaGoogle, FaMobile } from "react-icons/fa";
import { useContext, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import olxlogo from "../Image/olxlogo.png";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase-config";
import { PhoneAuth } from "./PhoneAuth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login({ onOpen, isOpen, onClose }) {
  const { setIsAuth, setToken } = useContext(AuthContext);
  // console.log(setIsAuth, setToken);
  const navigate = useNavigate();

  const [isEmailLogin, setisEmailLogin] = useState(1);
  const [isPhone, setPhone] = useState(0);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const HandleLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };
  var googleProvider = new GoogleAuthProvider();
  const SigninWithGoogle = () => {
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, googleProvider)
      .then((r) => {
        console.log(r);
        setIsAuth(true);
        onclose();
        // navigate("/");
      })
      .catch((err) => {
        console.log(err, "kk");
      });
  };
  const SignIn = () => {
    const Users = signInWithEmailAndPassword(
      auth,
      loginUser.email,
      loginUser.password
    )
      .then((users) => {
        const uuue = users.user;
        console.log(uuue);
        
        setIsAuth(true);
        // navigate("/");
        onclose()
        //Setsuccess(1)
      })
      .catch((err) => {
        console.log(err.message, "error");
        //Setsuccess(-1)
      });
    //Setsuccess(1)
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody>
            {isEmailLogin == 2 ? (
              <>
                <ModalHeader>
                  <ArrowBackIcon
                    color="red.500"
                    cursor="pointer"
                    onClick={() => setisEmailLogin(1)}
                  />
                </ModalHeader>
                <VStack spacing={3} h="90vh">
                  <Box p={5} h="100px">
                    <Img src={olxlogo} h="100%" />
                  </Box>
                  <Text fontSize="2xl" fontWeight="semibold">
                    Enter Your Details To Login
                  </Text>
                  <Stack w="100%">
                    <Input
                      placeholder="Email"
                      size="lg"
                      focusBorderColor="teal.300"
                      name="email"
                      onChange={HandleLogin}
                    />
                  </Stack>

                  <Stack w="100%">
                    <Input
                      placeholder="Password"
                      size="lg"
                      focusBorderColor="teal.300"
                      name="password"
                      onChange={HandleLogin}
                    />
                  </Stack>
                  <Box bgColor="#fefbf0" p={3}>
                    <Text>
                      If you are a new user please select any other login option
                      from previous page.
                    </Text>
                  </Box>
                  <Button w="100%" size="lg" onClick={SignIn} >
                    Submit
                  </Button>
                  <Text px={5} align="center">
                    Your email is never shared with external parties nor do we
                    use it to spam you in any way.
                  </Text>
                </VStack>
              </>
            ) : isEmailLogin == 1 ? (
              <>
                <VStack h="70vh">
                  <Box p={5} h="200px">
                    <Img src={notificationsImg} h="100%" />
                  </Box>
                  <Box w="100%">
                    <HStack
                      border="2px solid black"
                      // _hover={{ border: "5px solid black" }}
                      w="100%"
                      mb="5px"
                      px={5}
                      py={2}
                      borderRadius="5px"
                    >
                      <FaMobile />
                      <Text
                        fontWeight="bold"
                        onClick={() => setisEmailLogin(3)}
                      >
                        Continue With Phone
                      </Text>
                    </HStack>
                    <HStack
                      // _hover={{ border: "5px solid black" }}
                      border="2px solid black"
                      px={5}
                      py={2}
                      borderRadius="5px"
                    >
                      <FaGoogle />
                      <Text fontWeight="bold" onClick={SigninWithGoogle}>
                        Continue With Google
                      </Text>
                    </HStack>
                  </Box>
                  <Text fontWeight="bold">OR</Text>
                  <Button
                    variant="link"
                    color="black"
                    onClick={() => setisEmailLogin(2)}
                  >
                    Login With Email
                  </Button>
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
              </>
            ) : isEmailLogin == 3 ? (
              <>
                <ArrowBackIcon
                  color="red.500"
                  cursor="pointer"
                  onClick={() => setisEmailLogin(1)}
                />
                <PhoneAuth />
              </>
            ) : (
              <></>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { Login };
