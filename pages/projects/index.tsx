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
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { BsFillHouseDoorFill } from "@react-icons/all-files/bs/BsFillHouseDoorFill";

import CardItem from "../../components/CardItem";

const projects = () => {
  return (
    <div>
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
              className="pb-12 ml-1 text-gray-700 hover:text-gray-900"
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
          iconTitle={<RiRemoteControlLine className="mt-1 ml-1 " />}
          description=" Find the latest news about design and architecture and historic establishments in the Philippines. Be informed."
          src="/projects/architectureNews.png"
          path="https://architecture-news-website.vercel.app//"
          // Source Code:
          source="Source Code:"
          iconSource={
            <BsFillHouseDoorFill
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

      <div className="text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
        Architecture Projects
      </div>

      <div className="flex justify-center mt-2 md:mt-6 mb-28 md:mb-6">
        <CardItem
          title="Architectural Portfolio"
          iconTitle={
            <AiOutlineInstagram className="mt-1 ml-1 text-purple-500 " />
          }
          description="A portfolio of architectural projects and design journey of John Cañero."
          src="/projects/architecture/architectureProject.png"
          path="https://www.instagram.com/johncanero.archi/"
          sourceLink="https://www.instagram.com/johncanero.archi/"
          hashtag1="architectural"
          hashtag2="portfolio"
          hashtag3="projects"
        />
      </div>
    </div>
  );
};

export default projects;
