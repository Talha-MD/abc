import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Assets/pent1.jpg";
import Img2 from "../Assets/pent2.jpg";
import Img3 from "../Assets/pent3.jpg";
import Img4 from "../Assets/SM1.jpg";
import Img5 from "../Assets/SM2.jpg";
import Img6 from "../Assets/SM3.jpg";
import Img7 from "../Assets/SM4.jpg";

function Gallery() {
  const navigate = useNavigate();

  const handleCl = () => {
    navigate("/slider");
  };
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="overflow-hidden" onClick={handleCl}>
          <img src={Img1} alt="" className="hover:scale-150 duration-500" />
        </div>
        <div className="overflow-hidden" onClick={handleCl}>
          <img src={Img2} alt="" className="hover:scale-150 duration-500" />
        </div>
        <div className="overflow-hidden" onClick={handleCl}>
          <img src={Img3} alt="" className="hover:scale-150 duration-500" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
        <div className="flex flex-col justify-between">
          <div className="overflow-hidden" onClick={handleCl}>
            <img src={Img4} alt="" className="hover:scale-150 duration-500" />
          </div>
          <div className="overflow-hidden mt-5" onClick={handleCl}>
            <img src={Img7} alt="" className="hover:scale-150 duration-500" />
          </div>
        </div>
        <div className="overflow-hidden" onClick={handleCl}>
          <img src={Img6} alt="" className="hover:scale-150 duration-500" />
        </div>
        <div className="overflow-hidden" onClick={handleCl}>
          <img src={Img5} alt="" className="hover:scale-150 duration-500" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
