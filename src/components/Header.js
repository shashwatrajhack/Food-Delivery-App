import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";



const Header = () => {

  const [btnName,setBtnName] = useState("login")
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
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