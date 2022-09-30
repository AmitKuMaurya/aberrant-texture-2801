import { Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialStateFilters = searchParams.getAll("state");
  const initialSortBy = searchParams.getAll("sortBy");
  const [state, setState] = useState(initialStateFilters || []);

  const [sortBy, setSortBy] = useState(initialSortBy[0] || "");

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
  useEffect(() => {
    if (state || sortBy) {
      let params = {};
      state && (params.state = state);
      sortBy && (params.sortBy = sortBy);

      setSearchParams(params);
    }
  }, [state, setSearchParams, sortBy]);
  console.log("SortByValue", sortBy);
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
            value="Delhi"
            checked={state.includes("Delhi")}
            onChange={handleFilterCheckbox}
            style={{marginRight : "5px"}}
          />
          <label>Delhi</label>
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

export default FilterComp;