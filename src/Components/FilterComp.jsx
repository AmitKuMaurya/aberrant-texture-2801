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
    <div style={{ textAlign: "left" }}>
      <h3>Filter By State</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Madhya Pradesh"
            checked={state.includes("Madhya Pradesh")}
            onChange={handleFilterCheckbox}
          />
          <label>Madhya Pradesh</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Karnatak"
            checked={state.includes("Karnatak")}
            onChange={handleFilterCheckbox}
          />
          <label>Karnatak</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Uttar Pradesh"
            checked={state.includes("Uttar Pradesh")}
            onChange={handleFilterCheckbox}
          />
          <label>Uttar Pradesh</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="DELHI"
            checked={state.includes("DELHI")}
            onChange={handleFilterCheckbox}
          />
          <label>DELHI</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Maharatra"
            checked={state.includes("Maharatra")}
            onChange={handleFilterCheckbox}
          />
          <label>Maharatra</label>
        </div>
      </div>

      <h3>Sort by Price</h3>
      <div onChange={handleSort}>
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
      </div>
    </div>
  );
};

export default FilterComp;
