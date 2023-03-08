import React from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link, NavLink, useNavigate,  } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [search,setSearch] = useState({})
  const navigate = useNavigate()

  const onsubmit = (e)=>{
    e.preventDefault()
    navigate(`/search/`+ search)
    
  }
  return (
    <div className="navbar bg-[#548498] w-[100%] p-3 text-white flex flex-wrap justify-around items-center select-none">
      <NavLink to={`/`}>
        <div className=" ml-1 sm:w-[100%] flex gap-2 items-center sm:w-100% ">
          <p className="text-2xl  hover:text-orange-300 inline">
            <MdOutlineRestaurantMenu />
          </p>
          <h2 className="text-2xl tracking-wide font-semibold hover:text-orange-300">
            Foodie
          </h2>
        </div>
      </NavLink>
      <div className=" flex justify-center gap-5 items-center">
        <NavLink to={`/about`}>
          <h2 className="ml-20 text-xl tracking-wide font-semibold hover:text-orange-300">
            About
          </h2>
        </NavLink>
        <NavLink to={`/recipe`}>
          <h2 className=" text-xl tracking-wide font-semibold hover:text-orange-300">
            Recipe
          </h2>
        </NavLink>
        <form onSubmit = {onsubmit}>
          <input
            type="search"
            placeholder="Search recipe..."
            className="text-gray-900  px-2 py-1 rounded shadow mt-2 mr-[60px] w-36" onChange={e=> setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
