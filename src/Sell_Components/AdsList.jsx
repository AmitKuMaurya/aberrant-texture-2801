import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/SellReducer/action';
import AdsCard from './AdsCard';

function AdsList() {

  const dispatch = useDispatch();
  const product = useSelector((store)=>{
    return store.aidDetails;
  })
  console.log(product);

  useEffect(()=>{
      dispatch(getProducts())
    // }
  },[dispatch])

  return (
    <>
        {
          product.map((item)=>{
            return <AdsCard {...item} />
          })
        }
    </>
  )
}

export default AdsList;