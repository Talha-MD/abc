import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../Framer/AnimatedPage";

function Form() {
  const [state, setstate] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const handleInvest = () => {
    if (Object.keys(state).length === 0) {
      alert("please fill the form");
    } else {
      localStorage.setItem("data", JSON.stringify(state));
      alert("your information sudmitted");
      navigate("/invest");
    }
  };
  console.log(state);
  return (
    <AnimatedPage>
      <div className="flex flex-col justify-center items-center lg:mx-40  mx-5">
        <div className="mt-20 text-start  lg:w-[60%] md:[80%] w-[100%] text-[#AF9239]">
          <h1 className="text-2xl   ">Let Us Call You!</h1>
        </div>
        <div className="lg:w-[60%] md:w-[80%] w-[100%] my-4 flex flex-col">
          <label className="font-bold text-[#AF9239] text-xl">Your Name</label>
          <input
            onChange={handleChange}
            placeholder="Your Name"
            type="text"
            name="name"
            className="focus: outline-blue-300  w-[90%] p-2 rounded"
          />
        </div>
        <div className="lg:w-[60%] md:w-[80%] w-[100%] my-4 flex flex-col">
          <label className="font-bold text-[#AF9239] text-xl">
            Email Address
          </label>
          <input
            onChange={handleChange}
            placeholder="Your Email"
            type="text"
            name="email"
            className="focus: outline-blue-300  w-[90%] p-2 rounded"
          />
        </div>
        <div className="lg:w-[60%] md:w-[80%] w-[100%] my-4 flex flex-col">
          <label className="font-bold text-[#AF9239] text-xl">Contact No</label>
          <input
            onChange={handleChange}
            placeholder="Your Contact"
            type="number"
            name="Phone"
            className="focus: outline-blue-300  w-[90%] p-2 rounded"
          />
        </div>
        <div className="lg:w-[60%] md:w-[80%] w-[100%] my-4 flex flex-col">
          <label className="font-bold text-[#AF9239] text-xl">Message</label>
          <textarea
            onChange={handleChange}
            placeholder="Type your message"
            type="text"
            name="Message"
            className="focus: outline-blue-300  w-[90%] p-2 rounded"
          />
        </div>
        <div className="lg:w-[60%] md:w-[80%] w-[100%] my-4 flex justify-start">
          <button
            onClick={handleInvest}
            className="border-2  font-semibold text-white border-gray-400 rounded m-2   md:py-3 md:px-5 py-2 px-3 tracking-[.25rem]  hover:border-[#AF924B] hover:text-[#AF924B] duration-500"
          >
            Submit
          </button>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Form;
