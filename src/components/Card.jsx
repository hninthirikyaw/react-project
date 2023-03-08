import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../App.css";

const Card = ({ strMealThumb, idMeal, strMeal }) => {
  
  return (
    <div className=" w-[230px] mt-6 parent relative h-[240px]  ">
      <img src={strMealThumb} className="w-[200px] rounded-lg" />
      <p className=" text-md  text-gray-600 pt-1">{strMeal}</p>
      <Link to={`/detail/${idMeal}`}>
        <p className="icon absolute top-[80px] left-[80px] text-2xl w-11 h-11 bg-sky-500 cursor-pointer hover:bg-sky-700 rounded-[100%] text-white p-[10px] transition-all">
          <FcViewDetails />
        </p>
      </Link>
    </div>
  );
};

export default Card;
