import React from "react";
import Gallery from "./Gallery";
import AnimatedPage from "../Framer/AnimatedPage";

function About() {
  return (
    <AnimatedPage>
      <div className="lg:mx-40 md:mx-10">
        <div className="flex flex-col  items-center justify-center mt-10 mb-5">
          <h1 className="text-2xl text-[#AF9239] tracking-[.75rem] my-5">
            ABOUT
          </h1>
          <p
            className="text-white mt-2 w-[75%] text-center text-[1.15rem]"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            Deodar is a luxury resort opening doors soon. We have a long history
            in the hospitality industry, beginning with the opening of Daisy Dot
            hotel, Changlagali Pakistan in 1990, the highest mountain resort in
            Asia. We have chosen to be industry leader with the hospitality
            industry by offering only experiences of exceptional quality. Our
            objective is to be known as the company that manages the finest
            resorts wherever we locate.
          </p>

          <p
            className="text-white mt-5 w-[75%] text-center text-[1.15rem]"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            Deodar Resort is a perfect choice for peace and nature loving
            people, located at the bank of Attabad lake, Hunza valley, which is
            one of the most beautiful lakes of Pakistan surrounded by mighty
            mountains having spectacular landscapes.
          </p>
          <hr className="w-[15%] bg-gray-400 h-[1px] mt-2" />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default About;
