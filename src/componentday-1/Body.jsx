import React, { useEffect,useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Simer';
const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const[searchText,setSearchText]=useState('')
    // console.log(filteredRestaurant)
    


    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        const cards = json?.data?.cards;
        // console.log(cards)
        const restaurantCard = cards.find((c)=>{
          return c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        })

        // console.log(restaurantCard)
        

        setListOfRestaurant(restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    // console.log(listOfRestaurant)
    

    useEffect(()=>{
       setTimeout(()=>{
         fetchData();
       },2000)
    },[])
  return  filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) :  (
    <div className='body'>

      <div className='filter'>
        <div className='search'>
          <input value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }} type="text" placeholder='Search a restaurant you want...' className='searchBox'/>
          <button onClick={()=>{
            // console.log(searchText)
            const filtered = listOfRestaurant.filter((res)=>{
             return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })

             setFilteredRestaurant(filtered);
             setSearchText('')
          }}>Search</button>
        </div>

        <button className='filter-btn' onClick={()=>{
          let filtered = listOfRestaurant.filter((res)=>{
            return res.info.avgRating>4.5
          })


          setFilteredRestaurant(filtered)
        }}>Top Rated Restaurants</button>
      </div>

      <div className='res-container'>
       {
        filteredRestaurant.map((restaurants)=>{
          return <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
        })
       }
      </div>
      
    </div>
  )
}


export default Body