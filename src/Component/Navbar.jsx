import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../Framer/AnimatedPage";

function Navbar() {
  return (
    <AnimatedPage>
      <div className="md:mx-40 sm:mx-10  text-[.75rem] text-white my-7 ">
        <ul className="flex justify-center mx-0 sm:mx-10  flex-wrap">
          <Link to="/" className="duration-2000">
            <li className="border border-gray-400 rounded m-1   py-3 px-[2.70rem] tracking-[.5rem]  hover:border-[#AF924B] hover:text-[#AF924B] duration-500">
              HOME
            </li>
          </Link>
          <Link to="/invest">
            <li className="border border-gray-400 rounded m-1   py-3 px-8 tracking-[.5rem]  hover:border-[#AF924B] hover:text-[#AF924B] duration-500">
              INVEST
            </li>
          </Link>
          <Link to="/about">
            <li className="border border-gray-400 rounded m-1   py-3 px-[2.20rem] tracking-[.5rem]  hover:border-[#AF924B] hover:text-[#AF924B] duration-500">
              ABOUT
            </li>
          </Link>
          <Link to="/contact">
            <li className="border border-gray-400 rounded m-1   py-3 px-5 tracking-[.5rem]  hover:border-[#AF924B] hover:text-[#AF924B] duration-500">
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
    </AnimatedPage>
  );
}

export default Navbar;
