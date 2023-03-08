import React from "react";
import Footer from "./Footer";

import { BsFacebook, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="py-[100px] mx-3">
      {/* <h2 className='heading text-center text-xl tracking-wide' ></h2> */}
      <h2 className="heading text-3xl text-center tracking-wide mb-4">
        Contact Form
      </h2>
      <form className=" shadow-2xl border rounded p-8 lg:w-[50%] sm:w-[100%] lg:mx-auto sm:mx-2 ">
        <div className="mb-3 flex gap-3">
          <label htmlFor="name">Name:</label>
          <input
            required
            className=" border px-3 py-1 rounded sm:w-36"
            type="text"
            placeholder="Enter Your Name..."
          />
        </div>

        <div className=" flex gap-3 mb-3">
          <label htmlFor="name">Email:</label>
          <input
            required
            className=" border px-3 py-1 rounded "
            type="text"
            placeholder="Enter Your Name..."
          />
        </div>

        <div className="">
          <label htmlFor="">Enter Message Here</label> <br />
          <textarea
            className=" border px-3 py-1 rounded "
            id="message"
            cols="30"
            rows="5"
          ></textarea>
        </div>

        <div className=" flex gap-2 mt-3">
          <button
            className=" cursor-pointer hover:bg-green-700 px-3 py-2 bg-green-500 tracking-wide rounded
         text-white "
          >
            Submit
          </button>
          <button
            className="cursor-pointer hover:bg-red-700 px-3 py-2 bg-red-500 tracking-wide rounded
         text-white "
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>

      <div className=" mt-5 flex-col  shadow-2xl p-10 mx-auto w-[100%] ">
        <div className="address">
          <div className=" leading-7 my-3">
            <h2 className=" text-xl tracking-wide font-semibold">Our Address:</h2>
            <p className=" text-md tracking-wider font-semibold"> KA1 8YP, 40 Colorado Way, Riccarton, London </p>
            <p className=" text-md tracking-wider font-semibold">
              Phone: <a className=" underline" href="tel: +07865962795" target={"_blank"}>078 6596 2795</a>
            </p >
            <p className=" text-md tracking-wider font-semibold">
              Email:{" "}
              <a href="https://www.gmail.com" target={"_blank"}>
                foodie.recipe@gmail.com
              </a>
            </p>
          </div>
        </div>
        <h2 className=" text-xl tracking-wide font-semibold">
          For More Details:{" "}
        </h2>

        <div className=" flex items-center gap-2 mt-3">
          <h3 className=" text-xl font-semibold">Follow Us on : </h3>
          <a
            href="https://www.facebook.com/"
            target={"_blank"}
            className=" text-3xl text-blue-600 bg-gray-200 w-11 h-11 p-2 rounded-[100%] hover:text-blue-800 hover:bg-gray-300 cursor-pointer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.twitter.com/"
            target={"_blank"}
            className=" text-3xl text-[#1C93E4] bg-gray-200 w-11 h-11 p-2 rounded-[100%] hover:text-[#1C93E499] hover:bg-gray-300 cursor-pointer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target={"_blank"}
            className=" text-3xl text-[#25D366] bg-gray-200 w-11 h-11 p-2 rounded-[100%] hover:text-[#25D36699] hover:bg-gray-300 cursor-pointer"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
