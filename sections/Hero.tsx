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

const Hero = () => {
  // const toBuild = useRef() as any;
  // const toCreate = useRef() as any;

  // useEffect(() => {
  //   const a1 = annotate(toCreate.current, {
  //     type: "underline",
  //     brackets: ["top", "bottom"],
  //     padding: 1,
  //     color: "#858585",
  //     strokeWidth: 1,
  //   });

  //   const ag = annotationGroup([a1]);

  //   setTimeout(() => {
  //     ag.show();
  //   }, 1000);

  //   return () => {
  //     ag.hide();
  //   };
  // }, []);

  return (
    <div className="mt-16 font-Poppins lg:mr-96">
      <h1 className="sm:text-6xl text-center md:justify-start md:text-left md:text-7xl lg:text-8xl font-bold animate__animated animate__slideInLeft">
        Hi I'm
        <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 ml-2">
          Jam
        </span>
      </h1>

      <h3 className="text-center my-3 mt-3 mb-5 text-xl mx-12 md:mx-0 md:mt-4 md:mb-4 md:text-left md:justify-start md:text-3xl lg:mr-48">
        I am a <span className="highlight">Software Engineer</span>,{" "}
        <span className="highlight">Web Developer</span>
        <div className="flex justify-center md:justify-start">
          <div className="mr-1 md:mr-2">&</div>{" "}
          <div className="highlight">Architectural Designer</div>
        </div>
      </h3>

      <p className="text-center mb-10 mx-6 md:mb-8 md:mx-0 sm:text-center md:text-left text-gray-600 dark:text-gray-500 md:mr-48">
        I enjoy creating stuffs focusing on product design and development. I
        like to BUILD. To have fun, help people and show my work to the world.
        🏂
        {/* This is where I come in.  */}
      </p>
      {/* Horizontal Line */}
      <div>
        <hr className="mb-6 text-center w-48 flex mx-auto h-px md:mx-0 md:w-6/12 lg:w-9/12 bg-gray-300 border-0 dark:bg-zinc-900"></hr>
      </div>

      <div className="flex justify-center md:justify-start mb-12">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/johncanero/"
        >
          <FaLinkedin
            className="mr-5 dark:text-gray-100 hover:dark:text-cyan-500 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 animate__animated animate__fadeIn"
            size={30}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/johncanero"
        >
          <FaGithub
            className="mr-5 dark:text-gray-100 hover:dark:text-cyan-500  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 animate__animated animate__fadeIn"
            size={30}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/johncaneroo"
        >
          <FaTwitter
            className="mr-5 dark:text-gray-100 hover:dark:text-cyan-500  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 animate__animated animate__fadeIn"
            size={30}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/johncanero/"
        >
          <FaInstagram
            className="mr-0 dark:text-gray-100 hover:dark:text-cyan-500  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 animate__animated animate__fadeIn"
            size={30}
          />
        </Link>
      </div>

      <footer className="block md:hidden fixed bottom-20 w-screen left-0 text-center text-gray-500 text-sm">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
          John Cañero
        </span>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </footer>

      {/* Hire Me Button */}
      {/* <div className="flex justify-center items-center md:justify-between">
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/feed/"
          >
            <button
              className="md:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-gray-100 dark:text-white font-bold py-2 px-4 rounded-lg"
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
