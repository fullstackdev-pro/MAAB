import { LogoFooter } from "../assets";
import { FaYoutube, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-[#0C081A] px-16 pt-12 pb-8">
      <div className="flex justify-between bg-[#1F1B2C] rounded-2xl px-12 py-6">
        <div>
          <img
            src={LogoFooter}
            alt="Logo"
            className="w-[15rem] cursor-pointer"
          />
          <p className="text-[1.2rem] font-medium text-white ">
            +998 97 783 90 45
          </p>
          <div className="flex">
            <FaLinkedin className="text-[#ffffff] text-[1.2rem] cursor-pointer" />
            <AiFillInstagram className="text-[#ffffff] text-[1.2rem] ml-6 cursor-pointer" />
            <FaYoutube className="text-[#ffffff] text-[1.2rem] ml-6 cursor-pointer" />
            <BsTelegram className="text-[#ffffff] text-[1.2rem] ml-6 cursor-pointer" />
            <FaFacebook className="text-[#ffffff] text-[1.2rem] ml-6 cursor-pointer" />
          </div>
        </div>
        <div className="text-white text-[1rem]">
          <p className="font-bold text-[1.2rem] cursor-pointer">Kurslarimiz</p>
          <p className="cursor-pointer">Data analytics</p>
          <p className="cursor-pointer">Data engineer</p>
          <p className="cursor-pointer">Cloud data engineering</p>
        </div>
        <div className="text-white text-[1rem]">
          <p className="font-bold text-[1.2rem] cursor-pointer">Menyular</p>
          <p className="cursor-pointer">Grantlar</p>
          <p className="cursor-pointer">Sertifikatlarimiz</p>
          <p className="cursor-pointer">Ustozlar</p>
        </div>
        <div className="text-white text-[1rem] w-[35%]">
          <p className="font-bold text-[1.2rem] cursor-pointer">
            Biz bilan bog’laning
          </p>
          <div className="flex">
            <div><IoLocationOutline className="mt-3 mr-2 text-[1.2rem]" /></div>
            <div className="cursor-pointer">
              Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business Center on
              the 5th floor-1.
            </div>
          </div>
          <p className="cursor-pointer">
            {" "}
            <IoMailOutline className="mr-2 text-[1.2rem]" /> info@maab.uz
          </p>
          <p className="cursor-pointer">
            {" "}
            <FaPhoneAlt className="mr-2 text-[1.2rem]" /> +998 97 783 90 45
          </p>
        </div>
      </div>
      <div className="flex justify-between text-white"> 
        <div className="mt-4">© 2023 MAAB INNOVATION</div>
        <div className="flex ">
          <p>Dizaynerlar: Mazmoon</p>
          <p className="mx-4">|</p>
          <p>Dasturchilar: UniFS</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
