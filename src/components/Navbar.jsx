import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <>
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b-2 dark:border-gray-700 border-gray-200">
        <div className="flex justify-between items-center space-x-5 w-screen">
          <Link to="/">
            <p className="text-2xl bg-blue-500 text-white font-bold px-1 py-1 rounded-lg dark:bg-gray-500 dark:text-gray-900">
              quickSeek 🔎
            </p>
          </Link>
          <button
            type="button"
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
            className="text-xl dark:bg-gray-500 dark:text-white bg-white border rounded-full px-2 py-1 hover:shadow-lg"
          >
            {darkTheme ? "Light 🌞" : "Dark 🌑"}
          </button>
        </div>
        <Search />
      </div>
    </>
  );
}

export default Navbar;
