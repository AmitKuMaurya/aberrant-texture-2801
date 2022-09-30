import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const MobileFilterComp = () => {
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
  console.log("SortByValue", sortBy);
  return (
    <Box style={{ textAlign: "left" }}>
        <Text fontSize='xl' fontWeight="bold" mb="10px">LOCATIONS</Text>
        <Box style={{borderBottom : "0.2rem solid grey"}} pb="1rem">
        <Box>
          <input
            type="checkbox"
            value="Madhya Pradesh"
            checked={state.includes("Madhya Pradesh")}
             onChange={handleFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Madhya Pradesh</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Karnataka"
            checked={state.includes("Karnataka")}
             onChange={handleFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Karnataka</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Uttar Pradesh"
            checked={state.includes("Uttar Pradesh")}
             onChange={handleFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Uttar Pradesh</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Goa"
            checked={state.includes("Goa")}
             onChange={handleFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Goa</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Maharashtra"
            checked={state.includes("Maharashtra")}
             onChange={handleFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Maharashtra</label>
        </Box>
      </Box>



      <Text fontSize='xl' fontWeight="bold" mb="10px">BRANDS</Text>
      <Box style={{borderBottom : "0.2rem solid grey"}} pb="1rem">
        <Box>
          <input
            type="checkbox"
            value="OPPO"
            checked={brand.includes("OPPO")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>OPPO</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Motorola"
            checked={brand.includes("Motorola")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Motorola</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Realme"
            checked={brand.includes("Realme")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Realme</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Samsung"
            checked={brand.includes("Samsung")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Samsung</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="iQOO"
            checked={brand.includes("iQOO")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>iQOO</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Xiaomi"
            checked={brand.includes("Xiaomi")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Xiaomi</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="OnePlus"
            checked={brand.includes("OnePlus")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>OnePlus</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Redmi"
            checked={brand.includes("Redmi")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Redmi</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Apple"
            checked={brand.includes("Apple")}
              onChange={handleBrandFilterCheckbox}  style={{marginRight : "5px"}}
          />
          <label>Apple</label>
        </Box>
      </Box>



      <Text fontSize='xl' fontWeight="bold" mb="10px" mt="1rem">SORT BY</Text>
      <Box onChange={handleSort} style={{borderBottom : "0.2rem solid grey"}} pb="2rem">
        <input
          type="radio"
          value=""
          name="sortBy"
          defaultChecked={sortBy === ""}
        />
        <label>Relevance</label>
        <br />

        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />
        <label>Low to High</label>
        <br />

        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />
        <label>High to Low</label>
      </Box>
    </Box>
  );
};

export default MobileFilterComp;
