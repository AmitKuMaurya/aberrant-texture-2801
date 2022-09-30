import React from "react";
import FilterComp from "../Components/FilterComp";
import MobileList from "../Components/MobileList";
import styled from "styled-components";

const Mobiles = () => {
  return (
    <div>
        <h3>Mobiles Page</h3>
        <MobileWrapper>
            <FilterCompWrapper>
      <FilterComp />
      </FilterCompWrapper>
      <MobileListWrapper>
      <MobileList />
      </MobileListWrapper>
      </MobileWrapper>
    </div>
  );
};

const MobileWrapper = styled.div`
display: flex;
`;
const FilterCompWrapper = styled.div`
width: 300px;
border: 1px solid blue;
`;
const MobileListWrapper = styled.div`
width: 100%;
border: 1px solid red;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px,max-content));
grid-gap: 10px;
justify-content: center;
`

export default Mobiles;
