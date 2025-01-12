import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Routers from "./components/Routers";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Images from "./components/Images";
import Videos from "./components/Videos";
import News from "./components/News";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routers />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Results />,
        },
        {
          path: "images",
          element: <Images />,
        },
        {
          path: "videos",
          element: <Videos />,
        },
        {
          path: "news",
          element: <News />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
