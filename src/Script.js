import React from "react";

import ReactDOM from "react-dom/client";

import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";


const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//Routing Configuration
//Configuration is the list of Objects

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayOut />
  },
  {
    path:"/about",
    element:<About />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
