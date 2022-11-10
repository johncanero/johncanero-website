/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HireMeButton from "../components/HireMeButton";


const Hero = () => {
  return (
    <div className="mt-16 font-Poppins lg:mr-60">
      <h1 className="sm:text-6xl text-center md:justify-start md:text-left md:text-7xl font-bold">
        Hi I'm
        <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 ml-2">
          Jam
        </span>
      </h1>
      
      <h3 className="text-center my-3 mt-3 mb-5 text-xl mx-4 md:mx-0 md:mt-2 md:mb-3 md:text-left md:justify-start md:text-3xl lg:mr-48">
        I am Frontend Engineer, Web Developer & Architectural Designer
      </h3>

      <p className="text-center mb-10 mx-6 md:mb-8 md:mx-0 sm:text-center md:text-left text-gray-600 md:mr-48 lg:mr-96">
        I enjoy creating stuffs. I like to BUILD. To have fun, help people and
        show my work to the world. This is where I come in. 
      </p>

      {/* Hire Me Button */}
      <HireMeButton />
    </div>
  );
};

export default Hero;
