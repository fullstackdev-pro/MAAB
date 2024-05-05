// import React from "react";
import { FaPhoneAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Logo } from "../assets";

function Header() {
  return (
    <div className="mx-12">
      <div className="flex justify-end mt-3">
        <div className="flex ">
          <BsTelegram className="text-[#9A999B] text-[1.2rem] mr-6 cursor-pointer" />
          <AiFillInstagram className="text-[#9A999B] text-[1.2rem] mr-6 cursor-pointer" />
          <FaLinkedin className="text-[#9A999B] text-[1.2rem] mr-6 cursor-pointer" />
          <FaFacebook className="text-[#9A999B] text-[1.2rem] cursor-pointer" />
        </div>
        <span className="mx-8 text-[#EBEBEB">|</span>
        <select
          id="language"
          className="border-none bg-white text-[0.9rem] text-[#5D5D5F] cursor-pointer"
        >
          {/* eslint-disable-next-line */}
          <option value="en">Uzbek</option>
          <option value="fr">Русский</option>
          <option value="de">English</option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Logo" className="w-36 cursor-pointer" />
        <div className="flex items-center">
          <p className="text-lg text-[#FB5F12] font-medium">
            +998 97 783 90 45
          </p>
          {/* eslint-disable-next-line */}
          <button className="flex items-center p-2 my-2 ml-4 px-6 rounded-3xl bg-[#353437] text-[#FFFFFF] cursor-pointer">
            {/* eslint-disable-next-line */}
            <span className="text-base">Aloqada bo'ling</span>{" "}
            <FaPhoneAlt className="ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
