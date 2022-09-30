import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../Redux/SellReducer/action";

function SellFormComponent() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cars , setCars] = useState();
  const [year , setYear] = useState();
  // const [fuel , setFuel] = useState();
  // const [ transmission, setTransmission] = useState();
  const [ kmDriven,setKMDriven] = useState();
  const [title , setTitle] = useState();
  const [description , setDescription] = useState();
  const [price,setPrice] = useState();
  const [image , setImage] = useState();
  const [location,setLocation] = useState();
  // const [userImg , setUserImg] = useState();
  const [userName , setUserName] = useState();

  const handlePostReq =(e)=> {
    e.preventDefault();

    if(cars && year  && kmDriven && title && description && price && image && location && userName ){
      dispatch(postProduct({cars , year , kmDriven, title, description , price ,image, location , userName})).then((res)=>{
        console.log("inside function", res);
        navigate("/sellpost/postform/success");
      })
    }
  }  
  

  return (
    <>
      <Heading as={"h2"}>POST YOUR AD</Heading>

      <SimpleGrid maxW={"60%"} margin={"auto"} border={"1px solid red"}>
        <Box border={"1px solid black"}>
          <Heading textAlign={"left"} as={"h3"}>
            SELECTED CATEGORY
          </Heading>
        </Box>
        <Box textAlign={"left"}>
          <Heading as={"h3"}>INCLUDE SOME DETAILS</Heading>
          <form >
            <div>
              <label>Cars</label>
              <br />
              <select value={cars} onChange={(e) =>setCars(e.target.value)} required>
                <option value=""></option>
                <optgroup label="Popular Brand"></optgroup>
                <option value="maruti-suzuki">Maruti Suzuki</option>
                <option value="hyundai">Hyundai</option>
                <option value="tata">Tata</option>
                <option value="mahindra">Mahindra</option>
                <option value="toyota">Toyota</option>
                <option value="cars-honda">Honda</option>
                <optgroup label="All Brand"></optgroup>
                <option value="ashok">Ashok</option>
                <option value="aston">Aston</option>
                <option value="hindustan">Hindustan</option>
                <option value="mercedes-benz-1">Mercedes Benz</option>
                <option value="byd">BYD</option>
                <option value="ambassador">Ambassador</option>
                <option value="ashok-leyland">Ashok Leyland</option>
                <option value="aston-martin">Aston Martin</option>
                <option value="audi">Audi</option>
                <option value="bajaj1">Bajaj</option>
                <option value="bentley">Bentley</option>
                <option value="bmw">BMW</option>
                <option value="bugatti">Bugatti</option>
                <option value="cadillac">Cadillac</option>
                <option value="caterham">Caterham</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="chrysler">Chrysler</option>
                <option value="conquest">Conquest</option>
                <option value="daewoo">Daewoo</option>
                <option value="datsun">Datsun</option>
                <option value="dc">Dc</option>
                <option value="dodge">Dodge</option>
                <option value="eicher-polaris">Eicher Polaris</option>
                <option value="ferrari">Ferrari</option>
                <option value="fiat">Fiat</option>
                <option value="force-motors">Force Motors</option>
                <option value="ford">Ford</option>
                <option value="hindustan-motors">Hindustan Motors</option>
                <option value="cars-honda">Honda</option>
                <option value="hummer">Hummer</option>
                <option value="hyundai">Hyundai</option>
                <option value="icml">ICML</option>
                <option value="infiniti">Infiniti</option>
                <option value="isuzu">Isuzu</option>
                <option value="jaguar">Jaguar</option>
                <option value="jeep">Jeep</option>
                <option value="kia">Kia</option>
                <option value="lamborghini">Lamborghini</option>
                <option value="land-rover">Land Rover</option>
                <option value="lexus">Lexus</option>
                <option value="mahindra">Mahindra</option>
                <option value="mahindra-renault">Mahindra Renault</option>
                <option value="maruti-suzuki">Maruti Suzuki</option>
                <option value="maserati">Maserati</option>
                <option value="maybach">Maybach</option>
                <option value="mazda">Mazda</option>
                <option value="mercedes-benz">Mercedes-Benz</option>
                <option value="mg">MG</option>
                <option value="mini">Mini</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
                <option value="opel">Opel</option>
                <option value="peugeot">Peugeot</option>
                <option value="porsche">Porsche</option>
                <option value="premier">Premier</option>
                <option value="renault">Renault</option>
                <option value="rolls-royce">Rolls-Royce</option>
                <option value="san">San</option>
                <option value="sipani">Sipani</option>
                <option value="skoda">Skoda</option>
                <option value="smart">Smart</option>
                <option value="ssangyong">Ssangyong</option>
                <option value="subaru">Subaru</option>
                <option value="tata">Tata</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="volvo">Volvo</option>
              </select>
            </div>

            <div>
              <label>Year</label>
              <br />
              <input value={year} onChange={(e) =>setYear(e.target.value)} type="number" />
            </div>

            <div>
              <label>Fuel</label>
              <br />
              <button  >CNG & Hybrids</button>
              <button >Diesel</button>
              <button  >Electric</button>
              <button  >LPG</button>
              <button  >Petrol</button>
            </div>

            <div>
              <label>Transmission</label>
              <br />
              <button >Automatic</button>
              <button>Manual</button>
            </div>

            <div>
              <label>KM driven</label>
              <input value={kmDriven} onChange={(e) =>setKMDriven(e.target.value)} type="number" />
            </div>
            <div>
              <label>No. of Owners</label>
              <br />
              <button>1st</button>
              <button>2nd</button>
              <button>3rd</button>
              <button>4+</button>
            </div>

            <div>
              <label>Ad title</label>
              <br />
              <input value={title} onChange={(e) =>setTitle(e.target.value)}
                placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
                type="text"
              />
            </div>

            <div>
              <label>Description</label>
              <br />
              <textarea
              value={description} onChange={(e) =>setDescription(e.target.value)}
                placeholder="Include condition, features and reason for selling"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div>
              <h3>SET A PRICE</h3>
              <label>Price</label>
              <br />
              <input value={price} onChange={(e) =>setPrice(e.target.value)} type="number" />
            </div>

            <div>
              <h3>UPLOAD UP TO 20 PHOTOS</h3>
              <label >Image URL</label>
              <br />
              <input required type="url" value={image} onChange={(e)=>setImage(e.target.value)}  />
              {/* <input  type="file" onChange="readURL(this)" accept="Image/*" /> */}
            </div>

            <div>
              <h3>CONFIRM YOUR LOCATION</h3>
              <label>State</label>
              <br />
              <select value={location} onChange={(e) =>setLocation(e.target.value)} required >
                <option ></option>
                <option >Andaman &amp; Nicobar Islands</option>
                <option >Andhra Pradesh</option>
                <option >Arunachal Pradesh</option>
                <option >Assam</option>
                <option >Bihar</option>
                <option >Chandigarh</option>
                <option >Chhattisgarh</option>
                <option >Dadra &amp; Nagar Haveli</option>
                <option >Daman &amp; Diu</option>
                <option >Delhi</option>
                <option >Goa</option>
                <option >Gujarat</option>
                <option >Haryana</option>
                <option >Himachal Pradesh</option>
                <option >Jammu &amp; Kashmir</option>
                <option >Jharkhand</option>
                <option >Karnataka</option>
                <option >Kerala</option>
                <option >Lakshadweep</option>
                <option >Madhya Pradesh</option>
                <option >Maharashtra</option>
                <option >Manipur</option>
                <option >Meghalaya</option>
                <option >Mizoram</option>
                <option >Nagaland</option>
                <option >Odisha</option>
                <option >Pondicherry</option>
                <option >Punjab</option>
                <option >Rajasthan</option>
                <option >Sikkim</option>
                <option >Tamil Nadu</option>
                <option >Telangana</option>
                <option >Tripura</option>
                <option >Uttar Pradesh</option>
                <option >Uttaranchal</option>
                <option >West Bengal</option>
              </select>
            </div>

            <div>
              <h3>REVIEW YOUR DETAILS</h3>
              <div style={{display:"flex",justifyContent:"space-between",maxW:"50%"}}>
                <img   height={"30px"} width={"30px"} src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user logo" />
                 <input value={userName} onChange={(e) =>setUserName(e.target.value)}  type="text"placeholder="your name" />
              </div>
            </div>

            <button onClick={handlePostReq} type="submit">Post now</button>

          </form>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default SellFormComponent;
