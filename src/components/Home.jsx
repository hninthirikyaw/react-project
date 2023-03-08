import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";
import { BiCategory } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
const Home = () => {
  const [meal, setMeal] = useState({});

  useEffect(() => {
   
    const interval = setInterval(() => {
      fetchData();
    }, 2500);
    return ()=> clearInterval(interval);
  },[meal]);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const data = await api.json();
    setMeal(data.meals[0]);
    console.log(data.meals[0]);
  };

  return (
    <div className="pt-[50px]  h-[100vh]">
      <div className="home-bg w-[100%] h-[300px] ">
        <div className="py-24 mr-10">
          <h1 className=" text-sky-200 font-semibold tracking-wide text-4xl text-right  ">
            Welcome to Foodie
          </h1>
          <h3 className=" text-sky-200 font-semibold tracking-wide text-2xl leading-10 shadow text-right  ">
            We are here to serve <br /> the <strong>best recipe</strong> for
            you!
          </h3>
        </div>
      </div>
     
     
      <div className=" my-3">
      <h1 className="  ml-5 mt-6 font-semibold tracking-widest text-2xl mb-4 text-center">
        Popular Recipe
      </h1>
       <div className=" flex flex-wrap justify-around items-center">
       <img
          src={meal.strMealThumb}
          className="rounded w-[360px]"
        ></img>
       <div className="lg:w-[40%] sm:[w-100%]">
       <h2 className=" lg:text-left sm:text-center text-xl font-semibold tracking-wide">
          {meal.strMeal}
        </h2>
        <h2 className="mb-2 lg:text-left sm:text-center flex items-center gap-1 text-gray-700 text-xl font-semibold tracking-wide">
          <span>
            <BiCategory />
          </span>
          {meal.strCategory}
        </h2>
        
       </div>
       </div>
      </div>
      <div className=" flex justify-center items-center mt-10 ">
        <Link to={`/recipe`}>
          <button className=" mb-4 relative w-[200px] bg-sky-600  pl-1 py-2 rounded-md text-gray-200 font-semibold hover:bg-sky-900  ">
            More Recipes
            <span className="absolute top-3 text-xl inline-flex ml-1 ">
              <BsArrowRightShort />
            </span>
          </button>
        </Link>
      </div>
      <Footer />

    </div>
  );
};

export default Home;

