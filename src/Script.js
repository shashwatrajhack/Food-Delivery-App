import React, { lazy, Suspense } from "react";

import ReactDOM from "react-dom/client";

import Body from "./components/Body";
import Header from "./components/Header";
//import  About  from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(()=>import("./components/About"))


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
    element:<Suspense fallback = {"Loading...."}><About /></Suspense>
  },
  {
    path:"/contact",
    element:<Contact />

  },{
    path:"/grocery",
    element:<Suspense fallback={<div>Loading grocery…</div>}><Grocery /></Suspense>

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
