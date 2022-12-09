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
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { BsFillHouseDoorFill } from "@react-icons/all-files/bs/BsFillHouseDoorFill";
import { BsFillChatQuoteFill } from "@react-icons/all-files/bs/BsFillChatQuoteFill";

import CardItem from "../../components/CardItem";

const projects = () => {
  return (
    <div>
      {/* Add Links - Architecture */}
      <div className="flex gap-3 mt-4 font-semibold">
        <Link rel="noopener noreferrer" href="/projects">
          <div className="">Tech Projects</div>
        </Link>

        <Link rel="noopener noreferrer" href="/archi">
          <div className="">Architecture</div>
        </Link>
      </div>

      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
        Tech Projects
      </div>

      <div className="justify-center mt-6 mb-10 md:flex md:flex-wrap md:gap-12">
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

        {/* Architecture News */}
        <CardItem
          title="Architecture News"
          iconTitle={
            <BsFillHouseDoorFill className="mt-1 ml-1 text-amber-400 " />
          }
          description=" Find the latest news about design and architecture and historic establishments in the Philippines. Be informed."
          src="/projects/architectureNewsWebsiteDesktop.png"
          path="https://architecture-news-website.vercel.app//"
          // Source Code:
          source="Source Code:"
          iconSource={
            <FaGithub
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://github.com/johncanero/architecture-news-website"
          hashtag1="architecture"
          hashtag2="news"
          hashtag3="update"
        />

        {/* Shoe Product Card */}
        <CardItem
          title="Shoe Product Card "
          iconTitle={<GiRunningShoe className="mt-1 ml-1 text-green-400 " />}
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

        {/* Remote Landing Page*/}
        <CardItem
          title="Remote Landing Page"
          iconTitle={
            <RiRemoteControlLine className="mt-1 ml-1 text-yellow-400 " />
          }
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

        {/* Advice Generator App */}
        <CardItem
          title="Advice Generator App"
          iconTitle={
            <BsFillChatQuoteFill className="mt-1 ml-1 text-cyan-400 " />
          }
          description=" Let's be inspired, motivated and bless ourselves with quotes that would help and
          improve our life for the better and for others."
          src="/projects/adviceGeneratorApp3.png"
          path="https://advice-generator-app-by-johncanero.vercel.app/"
          // Source Code:
          source="Source Code:"
          iconSource={
            <FaGithub
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://github.com/johncanero/advice-generator-app"
          hashtag1="advice"
          hashtag2="generator"
          hashtag3="API"
        />

        {/* Airbnb Clone */}
        <CardItem
          title="Airbnb Clone"
          iconTitle={<FaAirbnb className="mt-1 ml-1 text-red-400 " />}
          description="Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home. An online marketplace for talks."
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
      </div>
    </div>
  );
};

export default projects;
