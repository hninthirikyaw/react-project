import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";
import HomeCard from "./HomeCard";
import { BsArrowRightShort } from "react-icons/bs";
const Home = () => {
  const [meal, setMeal] = useState({});

  useEffect(() => {
   
    const interval = setInterval(() => {
      fetchData();
    }, 2000);
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
    <div className="  h-[100vh]">
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
     
      <div className=" shadow-xl mt-3 flex flex-wrap  justify-around items-center p-3
      ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSZlNAesgjRzKFcPtZgrKlxX8vqmJrxYtMQ&usqp=CAU" className=" rounded w-[400px]" />

        <h2 className="ml-5 mt-3 font-semibold tracking-widest text-2xl mb-4 text-center">We have the most delicious meals for you!</h2>
      </div>
      <div className=" my-3">
      <h1 className="ml-5 mt-3 font-semibold tracking-widest text-2xl mb-4 text-center">
        Popular Recipe
      </h1>
        <img
          src={meal.strMealThumb}
          className="rounded w-[300px] m-auto"
        ></img>
        <h2 className=" text-center text-xl font-semibold tracking-wide">
          {meal.strMeal}
        </h2>
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

