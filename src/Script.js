import React from "react";

import ReactDOM from "react-dom/client";

import Body from "./components/Body";
import Header from "./components/Header";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";


const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

//Routing Configuration
//Configuration is the list of Objects
//RouterProvider component provide this routing configuration 

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayOut />,
    children:[{
      path:"/",
      element:<Body />
    },
      
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />

  },{
    path:"/grocery",
    element:<Grocery />

  },{
    path:"/restaurants/:resId",
    element:<RestaurantMenu />
  }

],
    errorElement:<Error />,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
