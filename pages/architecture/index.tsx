import React from "react";
import Link from "next/link";
import Head from "next/head";
// Icons
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineLaptop } from "@react-icons/all-files/ai/AiOutlineLaptop";
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { VscEdit } from "@react-icons/all-files/vsc/VscEdit";
import { RiFocus2Fill } from "@react-icons/all-files/ri/RiFocus2Fill"
import { AiTwotoneFolderOpen } from "@react-icons/all-files/ai/AiTwotoneFolderOpen"
import { GiFilmProjector } from "@react-icons/all-files/gi/GiFilmProjector"

import CardItem from "../../components/CardItem";

const index = () => {
  return (
    <div className="mb-32 font-Poppins">
      <Head>
        <title>Architecture / John Cañero</title>
        <meta
          name="description"
          content="John Cañero Website and Portfolio: Architecture"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="John Cañero: Architecture" />
        <meta property="og:description" content="John Cañero Website and Portfolio: Architecture" />
        <link rel="sitemap" type="application/xml" href="/sitemap-0.xml" />
      </Head>
      {/* Add Links - Architecture */}
      <div className="flex justify-end gap-3 px-4 mt-4 text-sm font-semibold md:text-base">
        <Link rel="noopener noreferrer" href="/projects">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <AiOutlineLaptop className="mt-0 md:mt-1" size={18} /> Tech Projects
          </div>
        </Link>

        <Link rel="noopener noreferrer" href="/visuals">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <VscEdit className="mt-0 md:mt-1" size={18} /> Visuals
          </div>
        </Link>
        <Link rel="noopener noreferrer" href="/architecture">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <BsHouseDoor className="mt-0 md:mt-1" size={18} /> Architecture
          </div>
        </Link>
      </div>

      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
        Architecture Projects
      </div>

      <div className="justify-center px-4 mt-6 mb-10 md:flex md:flex-wrap md:gap-12">
        {/* Zone Pavilion */}
        <CardItem
          title="Zone Philippine Pavilion"
          iconTitle={
            <RiFocus2Fill className="mt-1 ml-1 text-amber-700 " />
          }
          description="A Philippine Pavilion of the future designed to showcase and highlight the unique culture, values, and innovations of the Philippines."
          src="/projects/architecture/zonePhilippinePavilion3.jpg"
          path="https://www.instagram.com/p/Cf3D-91ryv6/"
          source="Architectural Portfolio:"
          iconSource={
            <AiTwotoneFolderOpen
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://www.instagram.com/johncanero.archi/"
          hashtag1="philippine"
          hashtag2="pavilion"
          hashtag3="archi"
        />

        {/* Zone Pavilion Boards */}
        <CardItem
          title="Pavilion Boards"
          iconTitle={
            <RiFocus2Fill className="mt-1 ml-1 text-amber-700 " />
          }
          description="The presentation boards of the Philippine Pavilion of the future project that showcases the concept, perspectives and plans."
          src="/projects/architecture/zonePhilippinePavilionBoards3.jpg"
          path="/projects/architecture/zonePhilippinePavilionPDF.pdf"
          source="Architectural Portfolio:"
          iconSource={
            <AiTwotoneFolderOpen
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://www.instagram.com/johncanero.archi/"
          hashtag1="philippine"
          hashtag2="pavilion"
          hashtag3="archi"
        />

        {/* Ibaloi Cinema Theater Complex */}
        <CardItem
          title="IBALOI Cinema Theater"
          iconTitle={
            <GiFilmProjector className="mt-1 ml-1 text-amber-500 " />
          }
          description="A Cinema Theater Complex serves as an inspiration in remembering the cultural & significance of ethnic groups in the Philippines."
          src="/projects/architecture/ibaloiCinemaTheaterComplex.jpg"
          path="https://www.instagram.com/p/CnLVH8Vye1s/"
          source="Architectural Portfolio:"
          iconSource={
            <AiTwotoneFolderOpen
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://www.instagram.com/johncanero.archi/"
          hashtag1="cinema"
          hashtag2="theater"
          hashtag3="complex"
        />

        {/* Ibaloi Cinema Theater Complex Boards */}
        <CardItem
          title="Cinema Theater Boards"
          iconTitle={
            <GiFilmProjector className="mt-1 ml-1 text-amber-500 " />
          }
          description="The presentation boards of the Ibaloi Cinema Theater Complex that showcases the concept, perspectives and plans."
          src="/projects/architecture/ibaloiCinemaTheaterComplexBoards.jpg"
          path="/projects/architecture/ibaloiCinemaTheaterComplexPDF.pdf"
          source="Architectural Portfolio:"
          iconSource={
            <AiTwotoneFolderOpen
              className="mt-3 ml-1 text-gray-700 hover:text-gray-900"
              size={20}
            />
          }
          sourceLink="https://www.instagram.com/johncanero.archi/"
          hashtag1="philippine"
          hashtag2="pavilion"
          hashtag3="archi"
        />

      </div>
    </div>
  );
};

export default index;
