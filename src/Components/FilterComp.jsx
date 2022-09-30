import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialStateFilters = searchParams.getAll("state");
  const [state, setState] = useState(initialStateFilters || []);
  const handleFilterCheckbox = (e) => {
    const newStates = [...state];
    if (newStates.includes(e.target.value)) {
      newStates.splice(newStates.indexOf(e.target.value), 1);
    } else {
      newStates.push(e.target.value);
    }
    setState(newStates);
  };
  useEffect(() => {
    if (state) {
      
      let params = {};
      state && (params.state = state);
      
      setSearchParams(params);
    }
  }, [state, setSearchParams]);
  return (
    <div style={{ textAlign: "left" }}>
      <h3>FilterComp</h3>
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
    </div>
  );
};

export default FilterComp;
