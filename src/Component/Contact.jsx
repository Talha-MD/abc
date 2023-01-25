import React from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import AnimatedPage from "../Framer/AnimatedPage";
function Contact() {
  return (
    <AnimatedPage>
      <div className="container  text-[#AF9239]">
        <h1 className="text-2xl text-center my-10 tracking-[.75rem]">
          CONTACT
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13287.263024020749!2d72.96873952210787!3d33.63601890671673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df978b44a2a73d%3A0x4e1e8b4bb9df9b1f!2sParis%20Rose%20Apartments!5e0!3m2!1sen!2s!4v1674232012786!5m2!1sen!2s"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center  py-5">
              <BsTelephoneForwardFill
                size={30}
                className="text-[#AF9239] mb-5"
              />
              <p>+92-321-531-3634</p>
              <p>+92-335-5000066</p>
            </div>
            <div className="flex flex-col items-center  mt-5 py-5">
              <MdLocationOn size={30} className="text-[#AF9239] my-2" />
              <p className="text-center w-[70%]">
                Paris Rose Tower, Street 4, Opposite NUST H13, Islamabad, 45200
              </p>
            </div>
            <div className="flex flex-col items-center  mt-5 py-5 ">
              <FaEnvelope size={30} className="text-[#AF9239] my-2 " />
              <p>Sales@deodarresorts.com</p>
              <p>Sales@5starmarketing.com</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <a
            href="https://instagram.com/deodarresorts?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram size={30} className="m-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/deodarresorts/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={30} className="m-5" />
          </a>
          <a
            href="https://www.facebook.com/deodarresorts?mibextid=LQQJ4d"
            rel="noreferrer"
            target="_blanck"
          >
            <AiFillFacebook size={30} className="m-5" />
          </a>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Contact;
