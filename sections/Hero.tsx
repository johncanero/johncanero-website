/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Hero = () => {
  return (
    <section className="mt-16 font-Poppins lg:mr-60">
      <h1 className="sm:text-6xl flex sm:justify-center md:justify-start md:text-7xl font-bold">
        Hi I'm <span className="dark:text-purple-600 ml-2">Jam</span>
      </h1>
      <h3 className="flex my-3 mb-4 md:mb-2 sm:text-2xl sm:justify-center md:justify-start md:text-4xl">I am Web Developer</h3>
      <p className="flex mb-8 mx-4 md:mx-0 sm:text-center md:text-left text-gray-700 md:mr-48 lg:mr-96">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam autem doloremque beatae iure, nihil fugit doloribus cum soluta
        modi!
      </p>
      <button
        className=" flex sm:mx-auto md:mx-0 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
      >Hire Me!</button>
    </section>
  );
};

export default Hero;
