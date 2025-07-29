import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState("");
  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9584922&lng=77.7126588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus()

  if(onlineStatus === false) return <h1>Looks like you are Offline !! check your internet connection !!</h1>

  return listOfRestaurant.length === 0 ? (
    <h1>Loading☠️☠️☠️☠️</h1>
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            )
            console.log(filteredRes);
            setFilteredRes(filteredRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div>
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
             const filteredRes = listOfRestaurant.filter((res)=>
              res.info.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            );
            console.log(filteredRes);
            setFilteredRes(filteredRes);
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            console.log("searchText",searchText)
            console.log("listOfRestaurant",listOfRestaurant)
            const filteredRes = listOfRestaurant.filter((res)=>
              res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            console.log(filteredRes);
            setFilteredRes(filteredRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
