import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiWorld ,BiCategory } from "react-icons/bi";
import Footer from "./Footer";


const Search = () => {
  const { name } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await api.json();
    console.log(data.meals[0]);
    setItem(data.meals[0]);
  };
  return (
   <div className="ml-10">
     <div className="lg:w-[50%] sm:w-[00%] pt-12 mx-auto my-16">
        <h2 className="mb-3 text-gray-800 text-2xl font-semibold tracking-wide">
          {item.strMeal}
        </h2>
      <img
        src={item.strMealThumb}
        className=" rounded shadow mt-9 w-[280px] mb-4"
      />
       <div className=" mb-3leading-6">
        
        <h2 className="mb-2 flex items-center gap-1 text-gray-700 text-xl font-semibold tracking-wide">
          <span>
            <BiCategory />
          </span>
          {item.strCategory}
        </h2>
        <h2 className="mb-2 flex items-center gap-1 text-gray-700 text-xl font-semibold tracking-wide">
          {" "}
          <span className="text-xl font-semibold">
            <BiWorld />
          </span>
          {item.strArea}
        </h2>

      </div>
      
    </div>
   </div>
  );
};

export default Search;
