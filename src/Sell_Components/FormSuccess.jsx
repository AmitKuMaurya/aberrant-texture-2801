import React from "react";
import { Link } from "react-router-dom";
// import {IoMdCheckmark} from 'react-icons/io';
function FormSuccess() {
    return (
        <>
            <navbar>
                <div style={{ display: "flex", paddingLeft: "2rem", backgroundColor: "#f0f3f3", marginBottom: "1rem" }}>
                    <img
                        width={"5%"}
                        src="https://imgs.search.brave.com/TR8JpzrOhVyxMguU2Oql5H4UMstOR7hVvKSFowTq-IM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waXhs/b2suY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA0L09M/WC1Mb2dvLVBORy5q/cGc"
                        alt=""
                    />
                </div>
            </navbar>
            {/* <IoMdCheckmark fontSize={"5rem"} /> */}
            <img
                width={"10%"}
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
                <button
                    style={{
                        backgroundColor: "#002f34",
                        color: "white",
                        padding: "1rem 2rem",
                        fontSize: "18px",
                        borderRadius: "7px",
                    }}
                >
                    Sell Faster Now
                </button>
                <Link to={""} >
                    <button
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
                    </button>
                </Link>
            </div>
        </>
    );
}

export default FormSuccess;
