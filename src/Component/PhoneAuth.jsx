import { Box, Button, Img, Input, Stack ,Text} from '@chakra-ui/react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase-config';
import olxlogo from "../Image/olxlogo.png";

export const PhoneAuth = () => {

  const navigate = useNavigate();
    
    const generateRecaptcha=()=>{
        console.log(auth)
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              //console.log('happy',response)
              
            }
          }, auth);
    }
    const requestotp = (e) =>{
        generateRecaptcha();
        var appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber( auth,number,appVerifier).then(confirmation=>{
            window.confirmation=confirmation;
            let code = prompt("enter otp",'')
            confirmation.confirm(code).then((res)=>{
                console.log(res.user,'user');
                navigate("/");
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    const verifyotp = (e) =>{
      let otp = e.target.value;
      setOtp(otp)
      if(otp.length==6){

      }
    }
    const [number,setNumber]=useState('');
    const [otp,setOtp] =useState('')
    console.log(number)
  return (
    <div>
      <Box p={5} h="100px">
                      <Img src={olxlogo} h="100%" />
                    </Box>
                    <Text fontSize="2xl" fontWeight="semibold">
                    Enter the Phone number
                    </Text>
                    <Stack w="100%">
                      <Input
                        placeholder=" Enter Mobile Number"
                        size="lg"
                        focusBorderColor="teal.300"
                        type={'text'}
                        name="email"
                        onChange={(e)=>setNumber(e.target.value)}
                        />
                    </Stack>
        <h2></h2>
        
        <Button w="100%" size="lg" onClick={requestotp}>
                     Submit
                    </Button>
        
        <div id='sign-in-button'></div>
    </div>
  )
}
