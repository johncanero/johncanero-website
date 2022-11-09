/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="mt-16 font-Poppins lg:mr-60">
      <h1 className="sm:text-6xl flex sm:justify-center md:justify-start md:text-7xl font-bold">
        Hi I'm{" "}
        <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 ml-2">
          Jam
        </span>
      </h1>
      <h3 className="flex my-3 mb-4 md:mb-3 sm:text-2xl sm:justify-center md:justify-start md:text-4xl">
        I am Frontend Engineer & Web Developer
      </h3>
      <p className="flex mb-8 mx-4 md:mx-0 sm:text-center md:text-left text-gray-600 md:mr-48 lg:mr-96">
        I enjoy creating stuffs. I like to BUILD. To have fun, help people and
        show my work to the world. This is where I come in. 🏂
      </p>
      <Link
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="sm:mx-auto md:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-gray-100 dark:text-white font-bold py-2 px-4 rounded-lg"
          onClick={undefined}
        >
          Hire Me!
        </button>
      </Link>
    </section>
  );
};

export default Hero;
