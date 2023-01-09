/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
// Icons
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
// Annimation
import { annotate, annotationGroup } from "rough-notation";

// Create a welcming featuere with annimaton
// Add contents about yourself and your goal
// Add Links

const Hero = () => {
  return (
    <div className="mt-16 font-Poppins lg:mr-96">
      <h1 className="font-bold text-center sm:text-6xl md:justify-start md:text-left md:text-7xl lg:text-8xl animate__animated animate__slideInLeft">
        Hi I'm
        <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
          &nbsp;Jam
        </span>
      </h1>

      <h3 className="mx-12 my-3 mt-3 mb-5 text-xl text-center md:mx-0 md:mt-4 md:mb-4 md:text-left md:justify-start md:text-3xl lg:mr-48">
        I am a <span className="highlight">Software Engineer</span>,{" "}
        <span className="highlight">Web Developer</span>
        <div className="flex justify-center md:justify-start">
          <div className="mr-1 md:mr-2">&</div>{" "}
          <div className="highlight">Architectural Designer</div>
        </div>
      </h3>

      <p className="mb-10 text-center text-gray-600 mx-11 md:mb-8 md:mx-0 sm:text-center md:text-left dark:text-gray-500 md:mr-48">
        I enjoy creating stuffs focusing on product design and development. <span className="font-bold text-black dark:text-gray-300">
          I like to BUILD. </span> To have fun, help people and show my work to the world.
        🏂
        {/* This is where I come in.  */}
      </p>
      {/* Horizontal Line */}
      <div>
        <hr className="flex w-48 h-px mx-auto mb-6 text-center bg-gray-300 border-0 md:mx-0 md:w-6/12 lg:w-9/12 dark:bg-zinc-900"></hr>
      </div>

      <div className="flex justify-center mb-12 md:justify-start">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/johncanero/"
        >
          <FaLinkedin
            className="mr-5 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110 animate__animated animate__fadeIn"
            size={30}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/johncanero"
        >
          <FaGithub
            className="mr-5 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110 animate__animated animate__fadeIn"
            size={30}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/johncaneroo"
        >
          <FaTwitter
            className="mr-5 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110 animate__animated animate__fadeIn"
            size={30}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/johncanero/"
        >
          <FaInstagram
            className="mr-0 transition duration-300 ease-in-out dark:text-gray-100 hover:dark:text-cyan-500 hover:-translate-y-1 hover:scale-110 animate__animated animate__fadeIn"
            size={30}
          />
        </Link>
      </div>

      {/* Mobile */}
      {/* <footer className="fixed left-0 block w-screen text-sm text-center text-gray-500 md:hidden bottom-20">
        <span className="mr-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          John Cañero
        </span>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </footer> */}

      {/* Hire Me Button */}
      {/* <div className="flex items-center justify-center md:justify-between">
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/feed/"
          >
            <button
              className="px-4 py-2 font-bold text-gray-100 rounded-lg md:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 dark:text-white"
              onClick={undefined}
            >
              Hire Me!
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
