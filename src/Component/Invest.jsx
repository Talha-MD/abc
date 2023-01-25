import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../Framer/AnimatedPage";
function Invest() {
  const navigate = useNavigate();
  const handleform = () => {
    navigate("/form");
  };
  return (
    <div className=" md:mx-10 mx-5 flex flex-col  tracking-[.75rem] items-center justify-center mt-10 mb-5 ">
      <h1 className="text-2xl text-[#AF9239] my-5">INVEST</h1>
      <AnimatedPage>
        <div className="lg:w-[60vw] lg:h-[120vh] md:w-[60vw] md:h-[80vh] w-[70vw] h-[70vh]  duration-500 ">
          <div className="invest w-[100%] h-[100%] flex justify-center relative">
            <button
              onClick={handleform}
              className="border absolute top-[65%] md:left-[40%] font-extrabold  border-gray-400 rounded m-2   md:py-3 md:px-3 py-2 px-2 md:tracking-[.25rem]  hover:border-[#AF924B] hover:text-[#AF924B] duration-500"
            >
              INVEST NOW!
            </button>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
}

export default Invest;
