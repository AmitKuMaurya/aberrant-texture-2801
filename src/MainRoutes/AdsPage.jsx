import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../Redux/SellReducer/action';
import { GiFuelTank, GiAutomaticSas } from "react-icons/gi";
import { BsSpeedometer2, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { GoLocation } from 'react-icons/go'


function SingleAdsItem() {

  const x = new Date();
  // console.log(x);

  let a = x.getDay();
  let b = x.getMonth();
  let c = x.getFullYear();


  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const [currentShoes, setCurrentShoes] = useState({});
  const Shoes = useSelector(state => state.aidDetails);

  useEffect(() => {
    if (Shoes.length === 0) {
      dispatch(getProducts());
    }
  }, [Shoes.length, dispatch]);

  useEffect(() => {
    if (id) {
      const bookById = Shoes.find(shoe => shoe.id === Number(id));
      bookById && setCurrentShoes(bookById)
    }
  }, [Shoes, id, currentShoes]);

  console.log(currentShoes);
  console.log(currentShoes.cars);

  // style={{display:"grid", gridTemplateColumns:"45% 20",gap:"5%",maxWidth:"70%",margin:"auto"}}
  return (
    <>
      <div style={{ paddingTop: "50px", width: "80%", margin: "auto" }} >
        <div style={{ backgroundColor: "black" }}>
          <img width={"60%"} height={"400px"} src={currentShoes.image} alt="logo" />

        </div>

        <div style={{ display: "grid", gridTemplateColumns: "60% 35%", gap: "5%", margin: 'auto', marginTop: "50px" }}>
          {/* left side of container */}
          <div style={{ display: "flex", flexDirection: "column" }} >
            <div style={{ textAlign: "left", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "0.5rem 1rem", marginBottom: "1rem" }}>
              <h2>{currentShoes.cars}</h2>
              <p>{currentShoes.title}</p>
              <div>
                <GiFuelTank /> <span style={{ color: "grey", marginRight: "1rem" }}>CNG & PETROL</span>
                <BsSpeedometer2 /> <span style={{ color: "grey", marginRight: "1rem" }}>{currentShoes.kmDriven}</span>
                <GiAutomaticSas /> <span style={{ color: "grey", marginRight: "1rem" }}>AUTOMATIC</span>
              </div>
            </div>
            <div style={{ textAlign: "left", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "0.5rem 1rem", marginBottom: "1rem" }}>
              <h2 style={{ color: "grey", borderBottom: "1px solid grey" }}>Overview</h2>
              <div style={{ color: "grey", display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: "-5rem" }} >
                <div style={{ color: "black", fontSize: "1rem", display: "flex", flexDirection: "column" }}>
                  <AiOutlineUser /> <span>Owner</span>
                  <span>1st</span>
                </div>

                <div style={{ color: "black", fontSize: "1rem", display: "flex", flexDirection: "column" }}>
                  <GoLocation /> <span>location</span>
                  <span >{currentShoes.location}</span>
                </div>

                <div style={{ color: "black", fontSize: "1rem", display: "flex", flexDirection: "column" }}>
                  <BsCalendar2Date /> <span>posting date :</span>
                  <span>{a}/{b}/{c}</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "left", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "0.5rem 1rem", marginBottom: "1rem" }} >
              <h2 style={{ borderBottom: "1px solid grey", color: 'grey' }} >Description</h2>
              <p>{currentShoes.description}</p>
            </div>
          </div>

          {/* right side of container */}

          <div style={{ display: "flex", justifyContent: "", flexDirection: "column"}}>

            <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" ,marginBottom:"1rem" }} >
              <h1 >{`₹`} {currentShoes.price}</h1>
            </div>

          <div  style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",textAlign:"left",padding:"0.5rem 1rem" }}>
            <p>POST BY</p>
            <h3>{currentShoes.userName}</h3>
            <p>Your ad expires on: {a}/{b}/{c}</p>

            <div>
            <button style={{padding:"1rem 7rem",width:'100%',backgroundColor:"white",cursor:"pointer",border:"5px solid #053338",borderRadius:"7px",margin:"auto",fontWeight:"bolder",fontSize:"20px"}} >Remove</button>
            <br />
            <br />
            <button style={{padding:"1rem 7rem",width:'100%',backgroundColor:"white",cursor:"pointer",border:"5px solid #053338",borderRadius:"7px",margin:"auto",fontWeight:"bolder",fontSize:"20px"}} >Edit</button>
            </div>
          </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleAdsItem