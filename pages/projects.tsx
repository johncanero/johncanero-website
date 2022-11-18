/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { RiRemoteControlLine } from "@react-icons/all-files/ri/RiRemoteControlLine";
import { GiRunningShoe } from "@react-icons/all-files/gi/GiRunningShoe";
import { FaAirbnb } from "@react-icons/all-files/fa/FaAirbnb";
import { RiEmotionLaughLine } from "@react-icons/all-files/ri/RiEmotionLaughLine";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGlobeAsia } from "@react-icons/all-files/fa/FaGlobeAsia";

const projects = () => {
  return (
    <div>
      <div className="text-center text-gray-600 font-Poppins font-semibold mt-4 text-2xl">
        Projects
      </div>

      <div className="md:flex md:flex-wrap md:gap-12 justify-center mt-8">
        {/* John Cañero Website */}
        <div className="max-w-xs md:w-72 lg:w-96 mx-auto md:mx-0  rounded-2xl overflow-hidden shadow-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://johncanero-website.vercel.app/projects"
            >
              <Image
                src="/projects/johncaneroWebsite.png"
                width={250}
                height={250}
                alt="John Cañero Website"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex font-bold text-xl mt-2 mb-1 dark:text-black">
              John Cañero Website <CgWebsite className=" mt-1 ml-1" />
            </div>
            <p className="text-gray-700 text-base">
              A Portfolio x Website that features the developer's story,
              certifications, techstack (skills) and list of projects to be
              showcased.
            </p>

            {/* Source Code */}
            <p className="flex text-gray-700 text-base mt-3">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/johncanero-website"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>
          <div className="px-4 mt-1 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #portfolio
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #website
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #resume
            </span>
          </div>
        </div>

        {/* Remote Landing Page Card */}
        <div className="max-w-xs md:w-72 lg:w-96 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://remote-landing-page-by-johncanero.vercel.app/"
            >
              <Image
                src="/projects/remoteLandingPage.png"
                width={250}
                height={250}
                alt="Remote Landing Page"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex font-bold text-xl mt-2 mb-1 dark:text-black">
              Remote Landing Page <RiRemoteControlLine className=" mt-1 ml-1" />
            </div>
            <p className="text-gray-700 text-base">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            {/* Source Code */}
            <p className="flex text-gray-700 text-base mt-3">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/remote-landing-page"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>

          <div className="px-4 mt-1 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #remote
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #landingpage
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #work
            </span>
          </div>
        </div>

        {/* Shoe Product Card */}
        <div className="max-w-xs md:w-72 lg:w-96 mx-auto md:mx-0  rounded-2xl overflow-hidden shadow-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://shoe-product-card-by-johncanero.vercel.app/"
            >
              <Image
                src="/projects/shoeProductCard.png"
                width={250}
                height={250}
                alt="Shoe Product Card"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex font-bold text-xl mt-2 mb-1 dark:text-black">
              Shoe Product Card <GiRunningShoe className=" mt-1 ml-1" />
            </div>
            <p className="text-gray-700 text-base">
              Where previous Air Max models filled the sole with as much air as
              possible, the VaporMax focuses on using less air, more
              efficiently.
            </p>

            {/* Source Code */}
            <p className="flex text-gray-700 text-base mt-3">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/shoe-product-card"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>
          <div className="px-4 mt-1 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #shoe
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #product
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #sale
            </span>
          </div>
        </div>

        {/* Airbnb Clone */}
        <div className="max-w-xs md:w-72 lg:w-96 mx-auto md:mx-0  rounded-2xl overflow-hidden shadow-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://airbnb-clone-by-johncanero.vercel.app/"
            >
              <Image
                src="/projects/airBnbClone2.png"
                width={250}
                height={250}
                alt="Airbnb Clone"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex font-bold text-xl mt-2 mb-1 dark:text-black">
              Airbnb Clone <FaAirbnb className=" mt-1 ml-1 text-red-400" />
            </div>
            <p className="text-gray-700 text-base">
              Join unique interactive activities led by one-of-a-kind hosts-all
              without leaving home.
            </p>

            {/* Source Code */}
            <p className="flex text-gray-700 text-base mt-3">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/airbnb-clone"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>
          <div className="px-4 mt-1 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #airbnb
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #clone
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #feature
            </span>
          </div>
        </div>

        {/* Travel Journal */}
        <div className="max-w-xs md:w-72 lg:w-96 mx-auto md:mx-0  rounded-2xl overflow-hidden shadow-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://travel-journal-by-johncanero.vercel.app/"
            >
              <Image
                src="/projects/travelJournal.png"
                width={250}
                height={250}
                alt="Travel Journal"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex font-bold text-xl mt-2 mb-1 dark:text-black">
              Travel Journal <FaGlobeAsia className=" mt-1 ml-1" />
            </div>
            <p className="text-gray-700 text-base">
              Come on and let's travel and have adventure around the world! A
              travel journal of experience and fun times in life.
            </p>

            {/* Source Code */}
            <p className="flex text-gray-700 text-base mt-3">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/travel-journal"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>
          <div className="px-4 mt-1 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #journal
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #world
            </span>
          </div>
        </div>

        {/* About React */}
        <div className="max-w-xs md:w-72 lg:w-96 mx-auto md:mx-0  rounded-2xl overflow-hidden shadow-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://react-website-by-johncanero.vercel.app/"
            >
              <Image
                src="/projects/reactWebsite.png"
                width={250}
                height={250}
                alt="About React"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex font-bold text-xl mt-2 mb-1 dark:text-black">
              About React <RiEmotionLaughLine className=" mt-1 ml-1" />
            </div>
            <p className="text-gray-700 text-base">
              Know more about the information and fun facts about React Js. Toggle Feature for Dark Mode is available
            </p>

            {/* Source Code */}
            <p className="flex text-gray-700 text-base mt-3">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/react-website"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>
          <div className="px-4 mt-1 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #react
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #javascript
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #darkmode
            </span>
          </div>
        </div>


        
        {/* Meme Generator */}
        <div className="max-w-xs md:w-72 lg:w-96 mx-auto md:mx-0  rounded-2xl overflow-hidden shadow-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://meme-generator-rose-by-johncanero.vercel.app/"
            >
              <Image
                src="/projects/memeGenerator.png"
                width={250}
                height={250}
                alt="Meme Generator"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex font-bold text-xl mt-2 mb-1 dark:text-black">
              Meme Generator <RiEmotionLaughLine className=" mt-1 ml-1" />
            </div>
            <p className="text-gray-700 text-base">
              Looking for a Meme and create custom texts? Let's take a break and
              have a Meme!
            </p>

            {/* Source Code */}
            <p className="flex text-gray-700 text-base mt-3">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/meme-generator"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>
          <div className="px-4 mt-1 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #meme
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #generator
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #state&hooks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
