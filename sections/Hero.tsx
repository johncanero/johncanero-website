/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">
        Hi I'm <span className="dark:text-purple-600">Jam</span>
      </h1>
      <h3 className="text-4xl my-3">I am Web Develper</h3>
      <p className="text-gray-700 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam autem doloremque beatae iure, nihil fugit doloribus cum soluta
        modi!
      </p>
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >Hire Me!</button>
    </section>
  );
};

export default Hero;
