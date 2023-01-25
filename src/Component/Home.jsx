import React from "react";
import Logo from "../Assets/img1.png";
import AnimatedPage from "../Framer/AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
      <div className="mt-10">
        <div className="container flex flex-col items-center justify-center">
          <div className="mt-14">
            <img src={Logo} alt="" className="w-40" />
          </div>
          <h1 className="lg:text-[2.50rem] font-light md:text-3xl text-2xl text-center my-7 text-[#AF924B] tracking-[.50rem]">
            ATTABAD LAKE RESORT
          </h1>
          <p className="text-white my-2 font-light  text-center text-[1.20rem]">
            A luxury upscale resort like no other. Enjoy unparalleled views,
            luxury & hospitality. Your home <br /> away from home!
          </p>
          <hr className="w-[12%] bg-gray-400 h-[1px] mt-2" />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
