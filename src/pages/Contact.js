import React from "react";
import Layout from "../components/Layout";
import {
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="overflow-hidden">
        <div className="h-screen  ">
          <div className="h-screen flex  items-center flex-col text-5xl md:text-3xl ">
            <div className="fixed z-20 flex mt-28 border-2 px-1 py-2 rounded-md border-black hover:bg-gray-600 hover:opacity-80 shadow-2xl md:px-0 md:py-1 opacity-80">
              <a href="tel:+919130921658">
                <FaPhoneAlt className="mx-10 p-1 border-2 border-black rounded-md hover:bg-black hover:text-white md:mx-5 " />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TomatoTwister"
              >
                <FaGithub className="mx-10 p-1 border-2 border-black rounded-md hover:bg-black hover:text-white md:mx-5" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/hemant_v_j/"
              >
                <FaInstagram className="mx-10 p-1 border-2 border-black rounded-md hover:bg-black hover:text-white md:mx-5 " />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:2022.hemant.jatal@ves.ac.in"
              >
                <FaMailBulk className="mx-10 p-1 border-2 border-black rounded-md hover:bg-black hover:text-white md:mx-5" />
              </a>

              <FaLinkedin className="mx-10 p-1 border-2 border-black rounded-md hover:bg-black hover:text-white md:mx-5" />
            </div>
            <div className="mt-20 h-screen ">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_in4cufsz.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
        <div className="w-screen flex justify-center">
          <div className="md:w-full w-1/2  p-10 shadow-2xl bg-gray-100 mt-10 ">
            <h1 className="text-2xl font-semibold">Contact Me to Know More</h1>
            <input
              type="text"
              className="w-full border-2 border-gray-400 rounded p-1 shadow-xl mt-3"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full border-2 border-gray-400 rounded p-1 shadow-xl mt-3"
              placeholder="Email"
            />
            <textarea
              type="text"
              className="w-full border-2 border-gray-400 rounded p-1 shadow-xl mt-3"
              placeholder="Query"
            />
            <button
              className="bg-red-500 rounded text-white px-5 py-1 mt-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
