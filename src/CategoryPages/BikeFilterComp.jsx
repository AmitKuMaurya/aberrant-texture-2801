import { Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const BikeFilterComp = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const initialStateFilters = searchParams.getAll("state");
  const initialSortBy = searchParams.getAll("sortBy");
  const initialBrandFilters = searchParams.getAll('brand');
  const [state, setState] = useState(initialStateFilters || []);   

  const [sortBy, setSortBy] = useState(initialSortBy[0] || "");

  const [brand, setBrand] = useState(initialBrandFilters || [])

  const handleFilterCheckbox = (e) => {
    const newStates = [...state];
    if (newStates.includes(e.target.value)) {
      newStates.splice(newStates.indexOf(e.target.value), 1);
    } else {
      newStates.push(e.target.value);
    }
    setState(newStates);
  };
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  const handleBrandFilterCheckbox =(e) => {
    const newBrands = [...brand];
    if(newBrands.includes(e.target.value)){
        newBrands.splice(newBrands.indexOf(e.target.value), 1);
    } else {
        newBrands.push(e.target.value);
    }
    console.log(newBrands)
    setBrand(newBrands);
  }
  useEffect(() => {
    if (state || sortBy || brand) {
      let params = {};
      state && (params.state = state);
      sortBy && (params.sortBy = sortBy);
      brand && (params.brand = brand);

      setSearchParams(params);
    }
  }, [state, setSearchParams, sortBy,brand]);

  return (
    <Box style={{ textAlign: "left"}}>
      <Box style={{borderBottom : "0.2rem solid grey"}} mb="1rem">
          <Text fontSize='xl' fontWeight="bold" mb="10px">LOCATIONS</Text>
        <Box>
          <input
            type="checkbox"
            value="Madhya Pradesh"
            checked={state.includes("Madhya Pradesh")}
            onChange={handleFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Madhya Pradesh</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Karnataka"
            checked={state.includes("Karnataka")}
            onChange={handleFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Karnataka</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Uttar Pradesh"
            checked={state.includes("Uttar Pradesh")}
            onChange={handleFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Uttar Pradesh</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Goa"
            checked={state.includes("Goa")}
            onChange={handleFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Goa</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Maharashtra"
            checked={state.includes("Maharashtra")}
            onChange={handleFilterCheckbox}
            style={{marginRight : "5px", marginBottom : "1rem"}}
          />
          <label>Maharashtra</label>
        </Box>
      </Box>


      <Text fontSize='xl' fontWeight="bold" mb="10px">BRANDS</Text>
      <Box style={{borderBottom : "0.2rem solid grey"}} pb="1rem">
        <Box>
          <input
            type="checkbox"
            value="Hero"
            checked={brand.includes("Hero")}
            onChange={handleBrandFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Hero</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Yamaha"
            checked={brand.includes("Yamaha")}
            onChange={handleBrandFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Yamaha</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Royal Enfield"
            checked={brand.includes("Royal Enfield")}
            onChange={handleBrandFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Royal Enfield</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Hero Honda"
            checked={brand.includes("Hero Honda")}
            onChange={handleBrandFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Hero Honda</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="BMW"
            checked={brand.includes("BMW")}
            onChange={handleBrandFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>BMW</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Pulsar"
            checked={brand.includes("Pulsar")}
            onChange={handleBrandFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Pulsar</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Bajaj"
            checked={brand.includes("Bajaj")}
            onChange={handleBrandFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Bajaj</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="KTM"
            checked={brand.includes("KTM")}
            onChange={handleBrandFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>KTM</label>
        </Box>
      </Box>





      <Text fontSize='xl' fontWeight="bold" mb="10px">SORT BY</Text>
      <Box onChange={handleSort} style={{borderBottom : "0.2rem solid grey"}} mb="1rem">
        <input
          type="radio"   
          value=""
          name="sortBy"
          defaultChecked={sortBy === ""}
          style={{marginRight : "5px"}}
        />
        <label>Relevance</label>
        <br />

        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
          style={{marginRight : "5px"}}
        />
        <label>Low to High</label>
        <br />

        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
          style={{marginRight : "5px", marginBottom : "1rem"}}
        />
        <label>High to Low</label>
      </Box>
    </Box>
  );
};

export default BikeFilterComp;