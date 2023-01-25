import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Img1 from "../Assets/pent1.jpg";
import Img2 from "../Assets/pent2.jpg";
import Img3 from "../Assets/pent3.jpg";
import Img4 from "../Assets/SM1.jpg";
import Img5 from "../Assets/SM2.jpg";
import Img6 from "../Assets/SM3.jpg";
import Img7 from "../Assets/SM4.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../Framer/AnimatedPage";

function Slider() {
  const navigate = useNavigate();
  const handlemov = () => {
    navigate("/about");
  };
  return (
    <AnimatedPage>
      <div className="mt-20 text-[#AF9238]">
        <Swiper
          spaceBetween={40}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <AiOutlineClose
              onClick={handlemov}
              size={30}
              className="absolute top-0 left-[90%]"
            />
            <img src={Img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <AiOutlineClose
              onClick={handlemov}
              size={30}
              className="absolute top-0 left-[90%]"
            />
            <img src={Img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <AiOutlineClose
              onClick={handlemov}
              size={30}
              className="absolute top-0 left-[90%]"
            />
            <img src={Img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <AiOutlineClose
              onClick={handlemov}
              size={30}
              className="absolute top-0 left-[90%]"
            />
            <img src={Img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <AiOutlineClose
              onClick={handlemov}
              size={30}
              className="absolute top-0 left-[90%]"
            />
            <img src={Img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <AiOutlineClose
              onClick={handlemov}
              size={30}
              className="absolute top-0 left-[90%]"
            />
            <img src={Img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <AiOutlineClose
              onClick={handlemov}
              size={30}
              className="absolute top-0 left-[90%]"
            />
            <img src={Img7} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </AnimatedPage>
  );
}
export default Slider;
