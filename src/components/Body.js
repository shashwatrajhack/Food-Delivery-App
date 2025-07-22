import RestaurantCard from "./Restaurantcard";
import { resList } from "../utils/mockData";

const Body = () => {
  let listOfRestaurant = [
    {
      info: {
        id: "156663",
        name: "Sri Lakshmi Vaibhava",
        cloudinaryImageId: "hxdoygnqwwi6i6fenhjo",
        locality: "Marathahalli",
        areaName: "Marathahalli",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian"],
        avgRating: 4.5,
      },
    },
    {
      info: {
        id: "156643",
        name: "Sri Narayana",
        cloudinaryImageId: "hxdoygnqwwi6i6fenhjo",
        locality: "Marathahalli",
        areaName: "Marathahalli",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian"],
        avgRating: 3.5,
      },
    }
  ]; 
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{listOfRestaurant = listOfRestaurant.filter((res) => res.info.avgRating > 4);
            console.log(listOfRestaurant);
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
