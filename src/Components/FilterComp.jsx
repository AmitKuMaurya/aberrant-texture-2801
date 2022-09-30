import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = () => {
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
            value="Karnataka"
            checked={state.includes("Karnataka")}
            onChange={handleFilterCheckbox}
          />
          <label>Karnataka</label>
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
            value="Delhi"
            checked={state.includes("Delhi")}
            onChange={handleFilterCheckbox}
          />
          <label>Delhi</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Maharashtra"
            checked={state.includes("Maharashtra")}
            onChange={handleFilterCheckbox}
          />
          <label>Maharashtra</label>
        </div>
      </div>



      <h3>Filter By Brand</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="OPPO"
            checked={brand.includes("OPPO")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>OPPO</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motorola"
            checked={brand.includes("Motorola")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>Motorola</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Realme"
            checked={brand.includes("Realme")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>Realme</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Samsung"
            checked={brand.includes("Samsung")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>Samsung</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="iQOO"
            checked={brand.includes("iQOO")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>iQOO</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Xiaomi"
            checked={brand.includes("Xiaomi")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>Xiaomi</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="OnePlus"
            checked={brand.includes("OnePlus")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>OnePlus</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Redmi"
            checked={brand.includes("Redmi")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>Redmi</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Apple"
            checked={brand.includes("Apple")}
            onChange={handleBrandFilterCheckbox}
          />
          <label>Apple</label>
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
