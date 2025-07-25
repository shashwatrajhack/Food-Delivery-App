import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";

const Body = () => { 

  const [listOfRestaurant,setListOfRestaurant] = useState([]);
  useEffect(()=>{fetchData();},[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  return listOfRestaurant.length === 0?<h1>Loading☠️☠️☠️☠️</h1>: (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{const filteredRes = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
            console.log(filteredRes);
            setListOfRestaurant(filteredRes)
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        
      </div>
    </div>
  );
};

export default Body;
