/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Icons
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { RiRemoteControlLine } from "@react-icons/all-files/ri/RiRemoteControlLine";
import { GiRunningShoe } from "@react-icons/all-files/gi/GiRunningShoe";
import { FaAirbnb } from "@react-icons/all-files/fa/FaAirbnb";
import { RiEmotionLaughLine } from "@react-icons/all-files/ri/RiEmotionLaughLine";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGlobeAsia } from "@react-icons/all-files/fa/FaGlobeAsia";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { IoIosRocket } from "@react-icons/all-files/io/IoIosRocket";
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";

import CardItem from "../../components/CardItem";

const projects = () => {
  return (
    <div>
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
        Projects
      </div>

      <div className="justify-center mt-8 mb-20 md:flex md:flex-wrap md:gap-12">
        {/* John Cañero Website */}
        <CardItem
          title="John Cañero Website"
          iconTitle={<CgWebsite className="mt-1 ml-1" />}
          description="A Portfolio x Website that features the developer's story,
          certifications, techstack (skills) and list of projects to be
          showcased."
          src="/projects/johncaneroWebsite.png"
          path="https://johncanero-website.vercel.app/"
          // Source Code:
          source="Source Code:"
          iconSource={
            <FaGithub
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://github.com/johncanero/johncanero-website"
          hashtag1="portfolio"
          hashtag2="website"
          hashtag3="resume"
        />

        {/* Remote Landing Page*/}
        <CardItem
          title="Remote Landing Page"
          iconTitle={<RiRemoteControlLine className="mt-1 ml-1 " />}
          description=" Get your team in sync, no matter your location. Streamline
          processes, create team rituals, and watch productivity soar."
          src="/projects/remoteLandingPage.png"
          path="https://remote-landing-page-by-johncanero.vercel.app/"
          // Source Code:
          source="Source Code:"
          iconSource={
            <FaGithub
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://github.com/johncanero/remote-landing-page"
          hashtag1="remote"
          hashtag2="landingpage"
          hashtag3="work"
        />

        {/* Shoe Product Card */}
        <CardItem
          title="Shoe Product Card "
          iconTitle={<GiRunningShoe className="mt-1 ml-1 " />}
          description="Where previous Air Max models filled the sole with as much air as
          possible, the VaporMax focuses on using less air, more
          efficiently."
          src="/projects/shoeProductCard.png"
          path="https://shoe-product-card-by-johncanero.vercel.app/"
          // Source Code:
          source="Source Code:"
          iconSource={
            <FaGithub
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://github.com/johncanero/shoe-product-card"
          hashtag1="shoe"
          hashtag2="product"
          hashtag3="sale"
        />

        {/* About React */}
        {/* <div className="max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out shadow-2xl md:w-72 lg:w-96 md:mx-0 rounded-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 hover:-translate-y-1 hover:scale-100">
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
            <div className="flex mt-2 mb-1 text-xl font-bold dark:text-black">
              About React <FaReact className="mt-1 ml-1 " />
            </div>
            <p className="text-base text-gray-700">
              Know more about the information and fun facts about React Js.
              Toggle Feature for Dark Mode is available
            </p>
      
            <p className="flex mt-3 text-base text-gray-700">
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
          <div className="px-4 pb-2 mt-1">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #react
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #javascript
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #darkmode
            </span>
          </div>
        </div> */}

        {/* Airbnb Clone */}
          <CardItem
            title="Airbnb Clone"
            iconTitle={<FaAirbnb className="mt-1 ml-1 text-red-400 " />}
            description="Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home. An online marketplace for talks and inspiring influencers."
            src="/projects/airBnbClone2.png"
            path="https://airbnb-clone-by-johncanero.vercel.app/"
            // Source Code:
            source="Source Code:"
            iconSource={
              <FaGithub
                className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
                size={20}
              />
            }
            sourceLink="https://github.com/johncanero/airbnb-clone"
            hashtag1="airbnb"
            hashtag2="clone"
            hashtag3="feature"
          />


        {/* Meme Generator */}
        {/* <div className="max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out shadow-2xl md:w-72 lg:w-96 md:mx-0 rounded-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 hover:-translate-y-1 hover:scale-100">
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
            <div className="flex mt-2 mb-1 text-xl font-bold dark:text-black">
              Meme Generator <RiEmotionLaughLine className="mt-1 ml-1 " />
            </div>
            <p className="text-base text-gray-700">
              Looking for a Meme and create custom texts? Let's take a break and
              have a Meme!
            </p>

            <p className="flex mt-3 text-base text-gray-700">
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
          <div className="px-4 pb-2 mt-1">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #meme
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #generator
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #state&hooks
            </span>
          </div>
        </div> */}

        {/* Emojipedia */}
        {/* <div className="max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out shadow-2xl md:w-72 lg:w-96 md:mx-0 rounded-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 hover:-translate-y-1 hover:scale-100">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://emojipedia-by-johncanero.vercel.app/"
            >
              <Image
                src="/projects/emojipedia.png"
                width={250}
                height={250}
                alt="Emojipedia"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex mt-2 mb-1 text-xl font-bold dark:text-black">
              Emojipedia <IoIosRocket className="mt-1 ml-1 " />
            </div>
            <p className="text-base text-gray-700">
              A list of Emojipedia Preferences and its own dictionary, phrases
              and its use.
            </p>

            <p className="flex mt-3 text-base text-gray-700">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/emojipedia"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>
          <div className="px-4 pb-2 mt-1">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #emojipeddia
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #dictionary
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #emoji
            </span>
          </div>
        </div> */}

        {/* Digital Card - Jam */}
        {/* <div className="max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out shadow-2xl md:w-72 lg:w-96 md:mx-0 rounded-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 hover:-translate-y-1 hover:scale-100">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://johncanero-digitalcard.vercel.app/"
            >
              <Image
                src="/projects/digitalCardJam.png"
                width={250}
                height={250}
                alt="Digital Card"
                className="w-full animate__animated animate__fadeIn rounded-2xl"
              />
            </Link>
            <div className="flex mt-2 mb-1 text-xl font-bold dark:text-black">
              Digital Card <BsFillPersonFill className="mt-1 ml-1 " />
            </div>
            <p className="text-base text-gray-700">
              A Digital Card to represent the person's purpose and identity. A
              digital card shows presence and information for contact.
            </p>

            <p className="flex mt-3 text-base text-gray-700">
              Source Code:{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johncanero/digital-business-card"
              >
                <FaGithub className="ml-1 hover:text-gray-900" size={20} />
              </Link>
            </p>
          </div>
          <div className="px-4 pb-2 mt-1">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #digitalCard
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #introductory
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #contact
            </span>
          </div>
        </div> */}

        {/* Travel Journal */}
        {/* <div className="max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out shadow-2xl md:w-72 lg:w-96 md:mx-0 rounded-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 hover:-translate-y-1 hover:scale-100">
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
            <div className="flex mt-2 mb-1 text-xl font-bold dark:text-black">
              Travel Journal <FaGlobeAsia className="mt-1 ml-1 " />
            </div>
            <p className="text-base text-gray-700">
              Come on and let's travel and have adventure around the world! A
              travel journal of experience and fun times in life.
            </p>

            <p className="flex mt-3 text-base text-gray-700">
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
          <div className="px-4 pb-2 mt-1">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #travel
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #journal
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              #world
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default projects;
