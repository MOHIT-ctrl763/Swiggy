import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import {MENU_API,CDN_URL} from './constants'
import {MENU_API,CDN_URL} from './Constanst'

const RestaurantMenu = () => {
    const [resInfo,setResInfo]=useState(null);
    const {id} = useParams(); 
    
    // console.log(id)

    const fetchMenu = async()=>{
      const data = await fetch(MENU_API+id);
      const json = await data.json();
      // console.log(json.data.cards);
      // const resdetails = json?.data?.cards.find((e)=>{
      //   return e?.card?.card?.info
      // })
      // console.log(json)
      setResInfo(json.data.cards);
    }
    // console.log(resInfo)

    useEffect(()=>{
      fetchMenu()
    },[id]);

    console.log(resInfo)
    
if (resInfo === null) return <p>loading....</p>;

    const{
      name,cuisines,costForTwo,costForTwoMessage,cloudinaryImageId,avgRating
    }= resInfo[2]?.card?.card?.info;

    const {deliveryTime} = resInfo[2]?.card?.card?.info?.sla;


   const groupedCard = resInfo.find((c)=>{
    return c?.groupedCard
   })

  //  console.log(groupedCard)
   const {itemCards} = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //  console.log(itemCards)
  return (
    <div className='menu'>
      <header className='menu-header'>
        <div className="menu-header-left">
          <img src={CDN_URL+cloudinaryImageId} alt="restaurant info" />
        </div>

        <div className='menu-header-right'>
          <div className='menu-header-right'>
            <div className='top'>
              <h1>{name}</h1>
              <h3>{cuisines.join(', ')}</h3>
            </div>

            <div className="bottom">
              <h4 className='avg-rating'>
                <span className='icons' style={{position:'relative',top:'2px',marginRight:'3px'}}></span>
                <span>{avgRating}</span>
              </h4>
              <h4 className='time'>
                <span className='icons' style={{position:'relative',top:'2px',marginRight:'3px'}}></span>
                <span>{deliveryTime} MINS</span>
                
              </h4>
              <h3>{costForTwoMessage}</h3>
            </div>
          </div>
        </div>
      </header>

      <div className='menu-main'>
        <h2>menu</h2>
        <h3 className='items'>{itemCards.length} items</h3>
        <div className='menu-main-card-container'>
          {itemCards.map((item)=>(
            <div className='menu-card' key={item.card.info.id}>
              <div className='menu-card-left'>
                <h2 className='menu-name'>{item.card.info.name}</h2>
                <h3 className='menu-price'>
                  ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}
                </h3>
                <h4 className='menu-description'>
                  {item.card.info.description}
                </h4>
              </div>
              <div className='menu-card-right'>
                <img src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  )
}

export default RestaurantMenu