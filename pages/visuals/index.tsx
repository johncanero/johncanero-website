import React from "react";
import Link from "next/link";
import Image from "next/image";
// Icons
import { AiOutlineLaptop } from "@react-icons/all-files/ai/AiOutlineLaptop";
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { VscEdit } from "@react-icons/all-files/vsc/VscEdit";

const index = () => {
  return (
    <div className="font-Poppins">
      {/* Add Links - Architecture */}
      <div className="flex justify-end gap-3 mt-4 text-sm font-semibold md:text-base">
        <Link rel="noopener noreferrer" href="/projects">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <AiOutlineLaptop className="mt-0 md:mt-1" size={18} /> Tech Projects
          </div>
        </Link>

        <Link rel="noopener noreferrer" href="/architecture">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <BsHouseDoor className="mt-0 md:mt-1" size={18} /> Architecture
          </div>
        </Link>

        <Link rel="noopener noreferrer" href="/visuals">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <VscEdit className="mt-0 md:mt-1" size={18} /> Visuals
          </div>
        </Link>
      </div>

      {/* Heading */}
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
        Visuals
      </div>

      {/* Visuals */}
      <div className="flex justify-center mt-6 mb-10 md:flex md:flex-wrap md:gap-12">
        {/* Visual 1 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CVeYubPB-5o/"
          >
            <Image
              src="/images/visuals/rippleEffect.jpg"
              width={300}
              height={40}
              alt="escapeCompetition"
              className="animate__animated animate__fadeIn md:w-60 lg:w-72"
            />
            <p className="mt-1 text-sm font-bold leading-tight text-left w-60">
              Ripple Effect
            </p>
          </Link>
        </div>
        
        {/* Visual 2 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CabdY_wFoeO/"
          >
            <Image
              src="/images/visuals/escapeCompetition.jpg"
              width={300}
              height={40}
              alt="escapeCompetition"
              className="animate__animated animate__fadeIn md:w-60 lg:w-72"
            />
            <p className="mt-1 text-sm font-bold leading-tight text-left w-60">
              Escape Competition through Authenticity
            </p>
          </Link>
        </div>

        {/* Visual 3 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CVzF0lvB2ku/"
          >
            <Image
              src="/images/visuals/embraseYourOwnPace.jpg"
              width={300}
              height={40}
              alt="escapeCompetition"
              className="animate__animated animate__fadeIn md:w-60 lg:w-72"
            />
            <p className="mt-1 text-sm font-bold leading-tight text-left w-60">
              Embrace your Own Pace
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
