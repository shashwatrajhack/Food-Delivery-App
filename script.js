import React from "react";

import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FjlcUNyT_4y2RFMzFx8GPiyKvrH7a9mmaA&s"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props)=>{
  const {resData} = props;
  console.log('resData',props)
    return (
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
          <img 
          className="res-logo"
          alt="res-logo"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.data.cloudinaryImageId}
          />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(",  ")}</h4>
            <h4>{resData.data.costForTwo}</h4>
            <h4>{resData.data.avgRating}</h4>
        </div>
    )

}

const resObj = [
]
const Body = () => {

    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resData={resObj}/>
                {/* <RestaurantCard resName="KFC" cuisine = "CHicken Burger"/> */}

            </div>

        </div>
    )
};

const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
