import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    const data = await api.json();
    setRecipe(data.meals);
    console.log(recipe);
  };
  return (
    <div className=" select-none  py-[100px]">
      <div className="ml-8 flex flex-wrap justify-around items-center">
        {recipe.map((item) => {
          return (
            <Card
              key={item.idMeal}
              strMealThumb={item.strMealThumb}
              idMeal={item.idMeal}
              strMeal={item.strMeal}
            />
          );
        })}
      </div>
      
     <div className=" flex justify-center mt-4">
     <a href="#" className=" px-3 py-2 hover:bg-blue-700 rounded bg-blue-500 text-white w-32 text-center">Back to Top</a>
     </div>

       <Footer />
    </div>
  );
};

export default Recipe;
