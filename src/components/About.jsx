import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {GrHistory} from "react-icons/gr"

const About = () => {
  return (
    <div className=" h-[100vh]">
      <div
        className="  pt-[110px] px-6"
      >
        <h1 className=" text-3xl tracking-wide text-gray-800 flex gap-3 items-center">
          <p className=" text-2xl text-sky-500  ">
            <GrHistory />
          </p>
          Our Little Recipe Store History
          
          </h1>
        <section>
          <details className=" lg:w-[70%] sm:w-[100%] text-md tracking-wider leading-7 mb-3">
            <summary className="text-xl my-3 tracking-wider ">Do you know where our first place was?</summary>
            Actually, we started as a small online business and now it's become
            a little big increased as a store. You can learn more about the
            recipe on{" "}
            <a href="https://en.wikipedia.org/wiki/Recipe" target={"_blank"} className="text-slate-900 font-semibold tracking-wider ">Wikipedia</a>
          </details>
          <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/courgette_pakoras_83738_16x9.jpg" alt="recipe" className="lg:w-[70%] sm:w-[100%] rounded"/>
        </section>

        <section className="lg:w-[70%] sm:w-[100%] text-md tracking-wider leading-8 mt-3">
          Our <abbr title="Little Recipe Store">LRS</abbr> was first built since
          2008 by recipe lovers 🍔 And we only care about customers' right and
          our product quality. We promie that our service will be pleasant to
          you all. Have a great day to you all!
        </section>

        <section className="lg:w-[70%] sm:w-[100%] p-8 shadow-2xl my-4">
          <h2 className=" text-2xl font-semibold tracking-wider">
            Our Store Hours
          </h2>
          <p className=" my-2 text-xl text-gray-800 font-semibold tracking-wider">
            From Monday to Saturday
          </p>
          <p className=" text-xl text-gray-800 font-semibold tracking-wider">
            8am to 5pm
          </p>
        </section>

        <div className=" p-10  w-[100%]">
         <p className="text-xl tracking-wider"> For more Information...</p>
          <Link to={`/contact`}>
            <button className="px-3 py-2 bg-green-400 text-gray-800 tracking-wide mt-3 hover:bg-green-600 hover:text-white rounded-lg">Contact Us</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
