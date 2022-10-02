import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/SellReducer/action";
import AdsCard from "./AdsCard";

function AdsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const product = useSelector((store) => {
    return store.PostReducer.aidDetails;
  });

  return (
    <>
      <Heading
        textAlign="center"
        as="p"
        marginTop="1rem"
        marginBottom="1rem"
        size="lg"
      >
        Your published Ads
      </Heading>
      {product.length > 0 &&
        product.map((item) => {
          return <AdsCard key={item.id} {...item} />;
        })}
    </>
  );
}

export default AdsList;
