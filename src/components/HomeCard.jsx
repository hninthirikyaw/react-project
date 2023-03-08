import React from 'react'
import '../App.css'

const HomeCard = ({recipe, image, category}) => {
  return (
    <div className="  bg-gray-200 border rounded p-5 w-[200px] h-[280px] shadow">
       <img src={image} className="w-[300px] rounded-lg object-cover h-[100px] img" />
         <p className=" text-sky-900 text-2xl font-semibold tracking-wide ">{recipe}</p>
         <p className=" text-gray-700 text-xl font-semibold tracking-wide ">{category}</p>
       </div>
  )
}

export default HomeCard
