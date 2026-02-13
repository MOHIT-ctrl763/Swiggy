import React from 'react'
import { CDN_URL } from './utils/constants'

const RestaurantCard = ({resData}) => {
  // console.log(resData)
    const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
} = resData?.info

const {deliveryTime} = resData?.info.sla
  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL+cloudinaryImageId} alt=""/>

      <div className='res-card-content'>
        <h3>{name}</h3>
        <hr />
        <p>{cuisines.join(', ')}</p>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>

  )
}

export default RestaurantCard