import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../Redux/SellReducer/action';

function SingleAdsItem() {


  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const [currentShoes , setCurrentShoes] = useState({});
  const Shoes = useSelector(state => state.aidDetails);

  useEffect(()=>{
    if(Shoes.length ===0 ){
      dispatch(getProducts());
    }
  },[Shoes.length , dispatch]);

  useEffect(()=>{
    if(id){
      const bookById = Shoes.find( shoe => shoe.id === Number(id));
      bookById && setCurrentShoes(bookById)
    }
  },[Shoes ,id,currentShoes])
  // style={{display:"grid", gridTemplateColumns:"45% 20",gap:"5%",maxWidth:"70%",margin:"auto"}}
  return (
    <>
    <div style={{display:"grid", gridTemplateColumns:"45% 20",gap:"5%",maxWidth:"70%",margin:"auto"}} >
      <div>
        <img src={currentShoes.image} alt={currentShoes.title} />

      </div>
      <div>
        <div>{currentShoes.userName ? currentShoes.userName : ""}</div>
      </div>
    </div>
    
    </>
  )
}

export default SingleAdsItem