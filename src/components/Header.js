import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
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