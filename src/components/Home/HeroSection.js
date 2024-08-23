import React from 'react';
import bgimg from "../../assats/herobg.jpeg";
import smallimg from "../../assats/smallimg.png";
import uiPathImg from "../../assats/robote.png";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${bgimg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-8">
        {/* First Part: Text and Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-1/2 text-white z-10">
          <p className="text-lg uppercase md:text-[10px]">
            Business-Focused IT Consulting
          </p>
          <h1 className="text-xl md:text-5xl font-bold">IT Consulting</h1>
          <p className="text-justify text-lg md:text-[16px]">
            Let our consultants guide you to a better tomorrow for your business. Our IT consulting services add value, from infrastructure & security enhancements to cloud computing and software development to managed IT services & support.
          </p>
          <br />
          <p className="text-lg md:text-[16px]">
            Not only do we consult, but we fully implement and support our recommendations.
          </p>
          <Link
            to="/"
            className="bg-orange-600 text-black text-[12px] font-bold py-2 px-4 rounded mt-4 transition-colors duration-500 ease-in-out hover:bg-black hover:text-white">
            Get Your Free Consultation
          </Link>
        </div>

        {/* Second Part: Images */}
        <div className="mt-8 hidden md:flex md:mt-0 md:ml-8 justify-center md:w-1/2 z-10 relative">
          {/* Large Image */}
          <img
            src={smallimg}
            alt="Hero Image"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-white"
          />
          {/* Smaller Overlapping Image */}
          <img
            src={uiPathImg}
            alt="Overlapping Image"
            className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover absolute -bottom-6 left-16 md:left-20 md:bottom-0 border-4 border-orange-500"
          />
        </div>
      </div>
    </div>
  );
}
