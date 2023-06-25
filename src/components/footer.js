import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaMailBulk,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="overflow-hidden">
      <div className="h-72 md:h-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E5E7EB"
            fill-opacity="1"
            d="M0,96L0,128L240,128L240,192L480,192L480,192L720,192L720,256L960,256L960,96L1200,96L1200,64L1440,64L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-gray-200 w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className=" p-10 font-mono text-center">
            <p className="text-black pb-2">Designed and Developed by</p>
            <div className="h-1 border-2 border-dotted border-black "></div>
            <div className="items-center flex w-full justify-between py-2">
              <a href="tel:+919130921658">
                <FaPhoneAlt className="text-black  " />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TomatoTwister"
              >
                <FaGithub className="text-black " />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/hemant_v_j/"
              >
                <FaInstagram className="text-black " />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:2022.hemant.jatal@ves.ac.in"
              >
                <FaMailBulk className="text-black " />
              </a>
                               <a  target="_blank"
                rel="noreferrer"
                  href="https://wa.me/+919130921658"
                  >

              <FaWhatsapp className="text-black " /></a>
            </div>
            <div className="h-1 border-2 border-dotted border-black "></div>

            <p className="text-black pt-2">Hemant Jatal.V</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
