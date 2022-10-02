import React from "react";
import { Link } from "react-router-dom";
import {Box, Button, Img} from "@chakra-ui/react";
// import {IoMdCheckmark} from 'react-icons/io';
function FormSuccess() {
    return (
        <>
            {/* <IoMdCheckmark fontSize={"5rem"} /> */}
             
            <Box margin={"auto"} textAlign={"center"} marginTop={"3rem"} marginBottom={"3rem"}>
            <Img
                width={"10%"}
                style={{margin:"auto"}}
                src="https://media.npr.org/assets/img/2020/11/24/screenshot-480-_custom-da951372e8aeb5e94c1577fc58ee06c8c4d93698.png"
                alt="logo-1"
            />
            <h2>Congratulation</h2>
            <h3>Your Ad will go live shortly...</h3>
            <p>
                OLX allows 2 free ads in 180 days for{" "}
                <span style={{ color: "black", fontWeight: "bolder" }}>Cars</span>
            </p>

            <img
                src="	https://statics.olx.in/external/base/img/business_multi.webp"
                alt="logo-2"
                style={{margin:"auto"}}
            />

            <h3>Reach more buyers and sell faster</h3>
            <p>Upgrade your Ad to a top position</p>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "25%",
                    margin: "auto",
                    gap: "1rem",
                }}
            >
                <Button
                    style={{
                        backgroundColor: "#002f34",
                        color: "white",
                        padding: "1rem 4rem",
                        fontSize: "18px",
                        borderRadius: "7px",
                        cursor:"pointer"
                    }}
                >
                    Sell Faster Now
                </Button>
                <Link to={"/adslist"} >
                    <Button
                        style={{
                            border: "2px solid #002f34",
                            backgroundColor: "white",
                            color: "#002f34",
                            padding: "1rem 2rem",
                            fontSize: "18px",
                            borderRadius: "7px",
                            cursor: "pointer"
                        }}
                    >
                        Preview Aid
                    </Button>
                </Link>
            </div>
            </Box>
        </>
    );
}

export default FormSuccess;
