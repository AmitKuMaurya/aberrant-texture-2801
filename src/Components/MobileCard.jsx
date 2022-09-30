import React from 'react'

const MobileCard = ({mobileData}) => {
  return (
    <div>
        <div key={mobileData.id}></div>
      <div>
        
      <img  width="50%" height= "50%" src={`${mobileData.image}`} alt="Mobiles" />
      </div>
      <div      ><h2> ₹ {mobileData.price} </h2></div>
        <div >{mobileData.brand}</div>
      <div >{mobileData.title}</div>
      {/* <div >{mobileData.description}</div> */}
      {/* <div >{mobileData.state}</div>
      <div >{mobileData.city}</div> */}
    </div>
  )
}

export default MobileCard