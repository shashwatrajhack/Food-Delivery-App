import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
  const onlineStatus = useOnlineStatus();

  const [btnName,setBtnName] = useState("Login")
  return (
    <div className="header">
      <div className="logo">
        <img
          className="img"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button className = "btn" onClick={()=>{
            btnName === "Login" ?setBtnName("Logout"):setBtnName("Login");
            console.log(btnName)
          }}> {btnName} </button>
          
        </ul>
        
      </div>
    </div>
  );
};

export default Header;