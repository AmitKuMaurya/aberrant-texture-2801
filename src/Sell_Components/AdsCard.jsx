// import { flexbox } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function AdsCard({
  car,
  description,
  id,
  kmDriven,
  location,
  price,
  image,
  title,
  userName,
  year,
}) {
  const x = new Date();
  // console.log(x);

  let a = x.getDay();
  let b = x.getMonth();
  let c = x.getFullYear();
  console.log(a, b, c);

  const math = Math.floor(Math.random() * 10);

  return (
    <>
    
      <Box
        key={id}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          display: "grid",
          gridTemplateColumns: "10% 90%",
          maxWidth: "80%",
          margin: "auto",
          marginBottom: "1rem",
          borderRadius: "0.5rem",
          // gap:"1rem"
          // backgroundColor: "white",
        }}
      >
        <Box
          style={{
            backgroundColor: "#ebeeef",
            borderLeft: "0.1rem solid skyblue",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            From : {a}/{b}/{c}
          </p>
        </Box>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/adslist/${id}`}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0.3rem 0.5rem",
              cursor: "pointer",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid grey",
              }}
            >
              <img width={"7%"} src={image} alt="" />
              <h4>{title}</h4>
              <p>{price}</p>
              <button
                style={{
                  backgroundColor: "#23e5db",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 2rem",
                  border: "0px",
                }}
              >
                Active
              </button>
              <p>This ad is currently live</p>
              <BsThreeDots
                style={{ marginTop: "-1.3rem" }}
                fontSize={"1.5rem"}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.2rem 0.4rem",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "30%",
                }}
              >
                <p>
                  <AiOutlineEye />: views {math}
                </p>
                <p>
                  | <AiOutlineLike />: Likes {math}
                </p>
              </Box>
              <Box>
                <Button
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "white",
                    fontWeight: "bold",
                    borderRadius: "0.3rem",
                    cursor: "pointer",
                  }}
                >
                  Sell faster now
                </Button>
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
    </>
  );
}

export default AdsCard;
