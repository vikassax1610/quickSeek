import React from "react";
import Results from "./Results";
import Navbar from "./Navbar";

import { createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
function Routers() {
  return (
    <div className="p-4 ">
      <ul className="flex gap-10 text-lg font-bold tracking-tighter">
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/videos">Videos</NavLink>
        </li>
        <li>
          <NavLink to="/images">Images</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Routers;
