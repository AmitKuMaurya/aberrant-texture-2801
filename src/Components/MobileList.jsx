import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleMobile from "../Pages/SingleMobile";
import { getMobiles } from "../Redux/app/action";
import MobileCard from "./MobileCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const MobileList = () => {
  const mobiles = useSelector((state) => state.AppReducer.mobiles);
  const [searchParams] =useSearchParams()
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location || mobiles.length === 0) {
        const sortBy = searchParams.get('sortBy')
        let getMobilesParams = {
            params: {
                state: searchParams.getAll('state'),
                _sort: sortBy && 'price',
                _order: sortBy,
            },
        };
         console.log(getMobilesParams)
      dispatch(getMobiles(getMobilesParams));
    }
  }, [location.search]);
  
  return (
    <>
      {mobiles.length > 0 &&
        mobiles.map((singleMobile) => {
          return <MobileCardWrapper  key={singleMobile.id} > <MobileCard
          mobileData = {singleMobile} />
          </MobileCardWrapper>;
        })}
    </>
  );
};

const MobileCardWrapper = styled.div`
border: 1px solid green;
width: 300px;
height: 450px;
color: #002f34;
font-size: 14px;
object-fit: cover;
`

export default MobileList;
