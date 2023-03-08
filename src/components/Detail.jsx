import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { BiCategory } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs"
import Footer from "./Footer";

const Detail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [ingredient,setIngredient] = useState([])

  useEffect(()=>{
    const ingre = [
      { id: 1, name: recipe.strIngredient1 },
      { id: 2, name: recipe.strIngredient2 },
      { id: 3, name: recipe.strIngredient3 },
      { id: 4, name: recipe.strIngredient4 },
      { id: 5, name: recipe.strIngredient5 }
    ]
    setIngredient(ingre)
    console.log(ingredient)
  },[recipe])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await api.json();
    console.log(data.meals[0]);
    setRecipe(data.meals[0]);
  };

  function showIngre() {
    const ingred = document.querySelector(".ingred");
    ingred.classList.remove("hidden", "flex", "justify-around");
  }

  function hide() {
    const ingred = document.querySelector(".ingred");
    ingred.classList.add("hidden");
  }

  return (
    <div className=" h-[100vh] flex flex-wrap justify-around  items-center py-[100px] px-3 mb-[100px]">
      <img
        src={recipe.strMealThumb}
        className=" rounded-lg shadow-sm mt-3 w-[400px] mb-3"
      />
      <div className="w-[400px] mb-3 text-left leading-6">
        <h2 className="mb-3 text-gray-800 text-2xl font-semibold tracking-wide">
          {recipe.strMeal}
        </h2>
        <h2 className="mb-2 flex items-center gap-1 text-gray-700 text-xl font-semibold tracking-wide">
          <span>
            <BiCategory />
          </span>
          {recipe.strCategory}
        </h2>
        <h2 className="mb-2 flex items-center gap-1 text-gray-700 text-xl font-semibold tracking-wide">
          {" "}
          <span className="text-xl font-semibold">
            <BiWorld />
          </span>
          {recipe.strArea}
        </h2>
        <details>
          <summary className=" text-xl text-gray-600  font-semibold tracking-wide">
            Recipe Instruction
          </summary>
          <p className=" text-gray-600 tracking-wide leading-7">
            {recipe.strInstructions}
          </p>
        </details>
        <button
          onClick={() => showIngre()}
          className="my-3 px-3 py-2 bg-lime-400 border rounded shadow ingre-btn"
        >
          Ingredients
        </button>
        <div className="ingred hidden">
          {ingredient.map((item) => {
            return (
              <div key={item.id} >
                <p className=" text-gray-700 text-sm inline-flex tracking-wide">
                  {item.name}
                </p>
              </div>
            );
          })}
          <button
            onClick={() => hide()}
            className="py-1 px-2 bg-red-400 border my-2 rounded shadow hide-btn"
          >
            Hide
          </button>
        </div>

        

        <h2 className="flex gap-2 text-md font-semibold mt-2 mb-[100px]">
          Watch on Youtube:
        <a href={recipe.strYoutube} target="_blank" className=" text-red-600 text-3xl">
            <BsYoutube  /> 
        </a>
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
