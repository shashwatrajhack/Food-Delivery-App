import { useEffect, useState } from "react";

function RestaurantMenu() {

    const [resInfo,setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9584922&lng=77.7126588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    
    console.log(json);
    setResInfo(json.data);
  };
  return (
    <div className="menu">
      <h1>Name of the restaurants</h1>
      <h2>Menu</h2>

      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
