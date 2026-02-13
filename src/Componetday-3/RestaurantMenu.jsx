import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {CDN_URL} from './utils/constants'
import useRestaurantMenu from './utils/useRestaurantMenu';
import ShimmerMenu from './ShimmerMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
    // const [resInfo,setResInfo]=useState(null);
    const [showIndex, setShowIndex] = useState(0);
    const {id} = useParams(); 
    const resInfo = useRestaurantMenu(id);
    console.log("resinfo--",resInfo)
    
    // console.log(id)

    // const fetchMenu = async()=>{
    //   const data = await fetch(MENU_API+id);
    //   const json = await data.json();
    //   // console.log(json.data.cards);
    //   // const resdetails = json?.data?.cards.find((e)=>{
    //   //   return e?.card?.card?.info
    //   // })
    //   setResInfo(json.data.cards);
    // }
    // console.log(resInfo)

    // useEffect(()=>{
    //   fetchMenu()
    // },[id]);
    
if (resInfo === null) return <p>..loading</p>;

    const{
      name,cuisines,costForTwo,costForTwoMessage,cloudinaryImageId,avgRating
    }= resInfo[2]?.card?.card?.info;

    const {deliveryTime} = resInfo[2]?.card?.card?.info?.sla;


   const groupedCard = resInfo.find((c)=>{
    return c?.groupedCard
   })

  //  console.log(groupedCard)
   const {itemCards} = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //  console.log(itemCards)

  const categories = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

        console.log("categories--", categories)
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

       {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems = {index === showIndex?true:false}
          setShowIndex = {setShowIndex}
          index = {index}
          showIndex = {showIndex}
        />
      ))}
     
    </div>
  )
}

export default RestaurantMenu